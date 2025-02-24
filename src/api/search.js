'use strict';

const _ = require('lodash');

const db = require('../database');
const user = require('../user');
const categories = require('../categories');
const messaging = require('../messaging');
const privileges = require('../privileges');
const meta = require('../meta');
const plugins = require('../plugins');

const controllersHelpers = require('../controllers/helpers');

const searchApi = module.exports;

searchApi.categories = async (caller, data) => {
    // used by categorySearch module

    let cids = [];
    let matchedCids = [];
    const privilege = data.privilege || 'topics:read';
    data.states = (data.states || ['watching', 'tracking', 'notwatching', 'ignoring']).map(
        state => categories.watchStates[state]
    );
    data.parentCid = parseInt(data.parentCid || 0, 10);

    if (data.search) {
        ({ cids, matchedCids } = await findMatchedCids(caller.uid, data));
    } else {
        cids = await loadCids(caller.uid, data.parentCid);
    }

    const visibleCategories = await controllersHelpers.getVisibleCategories({
        cids, uid: caller.uid, states: data.states, privilege, showLinks: data.showLinks, parentCid: data.parentCid,
    });

    if (Array.isArray(data.selectedCids)) {
        data.selectedCids = data.selectedCids.map(cid => parseInt(cid, 10));
    }

    let categoriesData = categories.buildForSelectCategories(visibleCategories, ['disabledClass'], data.parentCid);
    categoriesData = categoriesData.slice(0, 200);

    categoriesData.forEach((category) => {
        category.selected = data.selectedCids ? data.selectedCids.includes(category.cid) : false;
        if (matchedCids.includes(category.cid)) {
            category.match = true;
        }
    });

    const result = await plugins.hooks.fire('filter:categories.categorySearch', {
        categories: categoriesData,
        ...data,
        uid: caller.uid,
    });

    return { categories: result.categories };
};

async function findMatchedCids(uid, data) {
    const result = await categories.search({
        uid: uid,
        query: data.search,
        qs: data.query,
        paginate: false,
    });

    let matchedCids = result.categories.map(c => c.cid);
    // no need to filter if all 3 states are used
    const filterByWatchState = !Object.values(categories.watchStates)
        .every(state => data.states.includes(state));

    if (filterByWatchState) {
        const states = await categories.getWatchState(matchedCids, uid);
        matchedCids = matchedCids.filter((cid, index) => data.states.includes(states[index]));
    }

    const rootCids = _.uniq(_.flatten(await Promise.all(matchedCids.map(categories.getParentCids))));
    const allChildCids = _.uniq(_.flatten(await Promise.all(matchedCids.map(categories.getChildrenCids))));

    return {
        cids: _.uniq(rootCids.concat(allChildCids).concat(matchedCids)),
        matchedCids: matchedCids,
    };
}

async function loadCids(uid, parentCid) {
    let resultCids = [];
    async function getCidsRecursive(cids) {
        const categoryData = await categories.getCategoriesFields(cids, ['subCategoriesPerPage']);
        const cidToData = _.zipObject(cids, categoryData);
        await Promise.all(cids.map(async (cid) => {
            const allChildCids = await categories.getAllCidsFromSet(`cid:${cid}:children`);
            if (allChildCids.length) {
                const childCids = await privileges.categories.filterCids('find', allChildCids, uid);
                resultCids.push(...childCids.slice(0, cidToData[cid].subCategoriesPerPage));
                await getCidsRecursive(childCids);
            }
        }));
    }

    const allRootCids = await categories.getAllCidsFromSet(`cid:${parentCid}:children`);
    const rootCids = await privileges.categories.filterCids('find', allRootCids, uid);
    const pageCids = rootCids.slice(0, meta.config.categoriesPerPage);
    resultCids = pageCids;
    await getCidsRecursive(pageCids);
    return resultCids;
}

searchApi.topics = async (caller, data) => {
    try {
        let { query, cid } = data;

        if (!query) {
            throw new Error('Search query is required');
        }

        cid = parseInt(cid, 10) || 0;

        if (cid !== 0) {
            const canRead = await privileges.categories.can('topics:read', cid, caller.uid);
            if (!canRead) {
                throw new Error('[[error:no-privileges]]');
            }
        }

        if (cid === 0) {
            throw new Error('Global searching is not implemented in this snippet.');
        }

        // 1. Get topic IDs in the category
        const topicIds = await db.getSortedSetRange(`cid:${cid}:tids`, 0, -1);
        console.log(`[searchApi.topics] Found topic IDs in cid:${cid}:tids ->`, topicIds);

        if (!topicIds || !topicIds.length) {
            console.log('[searchApi.topics] No topics found for that category. Returning empty list.');
            return { topics: [] };
        }

        // 2. Load each topic object
        const rawTopics = await Promise.all(topicIds.map(async (tid) => {
            const topicObj = await db.getObject(`topic:${tid}`);
            return topicObj ? { tid, ...topicObj } : null;
        }));

        const validTopics = rawTopics.filter(Boolean);
        console.log('[searchApi.topics] Valid topics loaded:', validTopics.map(t => ({
            tid: t.tid,
            title: t.title,
        })));

        // 3. Filter by the user’s query (convert to lowercase)
        const searchLower = query.toLowerCase();
        const matchedTopics = validTopics.filter(topic =>
            topic.title && topic.title.toLowerCase().includes(searchLower)
        );

        console.log(`[searchApi.topics] Topics matching "${query}":`, matchedTopics.map(t => ({
            tid: t.tid,
            title: t.title,
        })));

        // 4. Let plugins do additional filtering if needed
        const result = await plugins.hooks.fire('filter:topics.search', {
            topics: matchedTopics,
            ...data,
            uid: caller.uid,
        });

        return { topics: result.topics };
    } catch (error) {
        console.error('Search topics error:', error);
        throw error;
    }
};
