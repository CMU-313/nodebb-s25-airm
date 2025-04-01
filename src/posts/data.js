
'use strict';

const db = require('../database');
const plugins = require('../plugins');
const utils = require('../utils');

const intFields = [
	'uid', 'pid', 'tid', 'deleted', 'timestamp',
	'upvotes', 'downvotes', 'deleterUid', 'edited',
	'replies', 'bookmarks',
];

module.exports = function (Posts) {
	Posts.getPostsFields = async function (pids, fields) {
		if (!Array.isArray(pids) || !pids.length) {
			return [];
		}
		const keys = pids.map(pid => `post:${pid}`);
		const postData = await db.getObjects(keys, fields);
		const result = await plugins.hooks.fire('filter:post.getFields', {
			pids: pids,
			posts: postData,
			fields: fields,
		});
		result.posts.forEach(post => modifyPost(post, fields));
		return result.posts;
	};

	const user = require('../user'); // Ensure user module is included

	Posts.getPostData = async function (pid, uid) {
		console.log(`DEBUG: Fetching post data for pid=${pid}, uid=${uid}`);
	
		const posts = await Posts.getPostsFields([pid], []);
		if (!posts || !posts.length) {
			console.log(`DEBUG: No post found for pid=${pid}`);
			return null;
		}
	
		const post = posts[0];
		
		// ✅ Check if the user is an admin and store it in the post data
		post.isAdmin = await user.isAdministrator(uid); 
	
		console.log(`DEBUG: Post ${pid} - isAdmin=${post.isAdmin}`);
	
		return post;
	};
	



	Posts.getPostData = async function (pid, uid) {
		const posts = await Posts.getPostsFields([pid], ['official']); // Fetch 'official' field
		
		if (!posts || !posts.length) {
			return null;
		}
	
		const post = posts[0];
		post.isAdmin = await user.isAdministrator(uid);
		
		// Convert "official" value to a boolean
		post.official = post.official === '1'; 
	
		return post;
	};

	Posts.getPostField = async function (pid, field) {
		const post = await Posts.getPostFields(pid, [field]);
		return post ? post[field] : null;
	};

	Posts.getPostFields = async function (pid, fields) {
		const posts = await Posts.getPostsFields([pid], fields);
		return posts ? posts[0] : null;
	};

	Posts.setPostField = async function (pid, field, value) {
		await Posts.setPostFields(pid, { [field]: value });
	};

	Posts.setPostFields = async function (pid, data) {
		await db.setObject(`post:${pid}`, data);
		plugins.hooks.fire('action:post.setFields', { data: { ...data, pid } });
	};
};

function modifyPost(post, fields) {
	if (post) {
		db.parseIntFields(post, intFields, fields);
		if (post.hasOwnProperty('upvotes') && post.hasOwnProperty('downvotes')) {
			post.votes = post.upvotes - post.downvotes;
		}
		if (post.hasOwnProperty('timestamp')) {
			post.timestampISO = utils.toISOString(post.timestamp);
		}
		if (post.hasOwnProperty('edited')) {
			post.editedISO = post.edited !== 0 ? utils.toISOString(post.edited) : '';
		}
		// Mark post as "English" if decided by translator service or if it has no info
		post.isEnglish = post.isEnglish == "true" || post.isEnglish === undefined;
	}
}
