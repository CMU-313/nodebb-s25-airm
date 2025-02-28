'use strict';

const assert = require('assert');
const user = require('../src/user');
const posts = require('../src/posts');
const topics = require('../src/topics');
const categories = require('../src/categories');

describe('Admin Privileges for "Mark as Official"', () => {
    let adminUid, regularUid, cid, tid, pid;

    before(async () => {
        // Create an admin user
        adminUid = await user.create({
            username: 'adminUser',
            password: 'password123',
            gdpr_consent: 1,
        });
        await user.setAdmin(adminUid, true); // Make them an admin

        // Create a regular user
        regularUid = await user.create({
            username: 'regularUser',
            password: 'password123',
            gdpr_consent: 1,
        });

        // Create a category
        ({ cid } = await categories.create({
            name: 'Test Category',
            description: 'Category for testing',
        }));

        // Create a topic & post by regular user
        const topicData = await topics.post({
            uid: regularUid,
            cid,
            title: 'Test Topic',
            content: 'This is a test post.',
        });

        tid = topicData.topicData.tid;
        pid = topicData.postData.pid;
    });

    it('✅ Should allow admins to mark a post as official', async () => {
        const isAdmin = await user.isAdministrator(adminUid);
        assert.strictEqual(isAdmin, true, 'Admin check failed');

        await posts.setPostField(pid, 'official', true);
        const postData = await posts.getPostData(pid);

        assert.strictEqual(postData.official, true, 'Admin should be able to mark post as official');
    });

    it('❌ Should not allow regular users to mark a post as official', async () => {
        const isRegularAdmin = await user.isAdministrator(regularUid);
        assert.strictEqual(isRegularAdmin, false, 'Regular user should not be an admin');

        try {
            await posts.setPostField(pid, 'official', true);
            assert.fail('Regular user should NOT be able to mark post as official');
        } catch (err) {
            assert.ok(err, 'Expected error when regular user tries to mark post as official');
        }
    });
});
