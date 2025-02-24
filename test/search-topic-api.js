'use strict';

const assert = require('assert');
const path = require('path');
const nconf = require('nconf');
const request = require('../src/request');
const categories = require('../src/categories');
const meta = require('../src/meta');
const user = require('../src/user');
const topics = require('../src/topics');
const helpers = require('./helpers');

let testCategory;
let jar;

describe('Search Topics API', async () => {
  before(async () => {
    await helpers.setupData();
    ({ jar } = await helpers.loginUser('admin', '123456'));

    // Find the test category by name ("test")
    const allCats = await categories.getCategoriesData();
    testCategory = allCats.find(cat => cat.name.toLowerCase() === 'test');
    assert(testCategory, 'Test category was not created');
  });

  it('should return matching topics for a valid search query', async () => {
    const cid = testCategory.cid;
    const query = 'Test Topic'; // We know at least one topic with this title was posted in setupData
    const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;
    
    const result = await request.get(url, { jar });
    assert.strictEqual(result.response.statusCode, 200, `Expected status code 200, got ${result.response.statusCode}`);
    
    // result.body should be a JSON object with a topics array
    const body = result.body;
    assert(body.topics && Array.isArray(body.topics), 'Response should include a topics array');
    
    // Find at least one topic with title exactly matching "Test Topic"
    const matchingTopic = body.topics.find(t => t.title === 'Test Topic');
    assert(matchingTopic, 'No topic with title "Test Topic" was found in search results');
  });
});