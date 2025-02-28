'use strict';

const assert = require('assert');
const request = require('../src/request');
const nconf = require('nconf');
const helpers = require('./helpers');
const categories = require('../src/categories');

let testCategory;
let jar;

describe('Search Topics API', () => {
  before(async () => {
    await helpers.setupData();
    ({ jar } = await helpers.loginUser('admin', '123456'));

    // Find test category by name "test"
    const allCats = await categories.getCategoriesData();
    testCategory = allCats.find(cat => cat.name.toLowerCase() === 'test');
    assert(testCategory, 'Test category was not created');
  });

  describe('Valid Search Queries', () => {
    it('should return matching topics for a valid search query', async () => {
      const cid = testCategory.cid;
      const query = 'Test Topic'; // Expected to exist in setupData
      const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;
      
      const result = await request.get(url, { jar });
      assert.strictEqual(result.response.statusCode, 200, `Expected status code 200, got ${result.response.statusCode}`);

      // Verify response structure
      const body = result.body;
      assert(body.topics && Array.isArray(body.topics), 'Response should include a topics array');

      // At least one topic should match the query exactly
      const matchingTopic = body.topics.find(t => t.title === 'Test Topic');
      assert(matchingTopic, 'No topic with title "Test Topic" was found in search results');
    });
  });

  describe('Invalid Search Queries', () => {
    it('should return no matching topics for a non-existent query', async () => {
      const cid = testCategory.cid;
      const query = 'NonExistentTopic123456'; // This title should not exist
      const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;

      const result = await request.get(url, { jar });
      assert.strictEqual(result.response.statusCode, 200, `Expected status code 200, got ${result.response.statusCode}`);

      // Verify response structure
      const body = result.body;
      assert(body.topics && Array.isArray(body.topics), 'Response should include a topics array');
      assert.strictEqual(body.topics.length, 0, 'Expected no matching topics, but some were found');
    });

    it('should handle searches with special characters', async () => {
      const cid = testCategory.cid;
      const query = '@#$%^&*()_+';
      const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;

      const result = await request.get(url, { jar });
      assert.strictEqual(result.response.statusCode, 200, `Expected status code 200, got ${result.response.statusCode}`);

      const body = result.body;
      assert(body.topics && Array.isArray(body.topics), 'Response should include a topics array');
      assert.strictEqual(body.topics.length, 0, 'Expected no matching topics, but some were found');
    });

    it('should return an appropriate response for an empty query', async () => {
      const cid = testCategory.cid;
      const query = ''; // Empty search query
      const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;

      const result = await request.get(url, { jar });
      assert.strictEqual(result.response.statusCode, 400, `Expected status code 400 for empty query, got ${result.response.statusCode}`);
    });
  });

  describe('Case Insensitivity', () => {
    it('should return results regardless of case differences', async () => {
      const cid = testCategory.cid;
      const query = 'test topic'; // Should match "Test Topic"
      const url = `${nconf.get('url')}/api/search/topics?cid=${cid}&query=${encodeURIComponent(query)}`;

      const result = await request.get(url, { jar });
      assert.strictEqual(result.response.statusCode, 200, `Expected status code 200, got ${result.response.statusCode}`);

      const body = result.body;
      assert(body.topics && Array.isArray(body.topics), 'Response should include a topics array');

      const matchingTopic = body.topics.find(t => t.title.toLowerCase() === 'test topic');
      assert(matchingTopic, 'No topic with title "test topic" (case insensitive) was found in search results');
    });
  });
});
