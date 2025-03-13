const { JSDOM } = require("jsdom");

// Create a virtual DOM
const dom = new JSDOM(``, { url: "http://localhost" });

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Optional: Define common globals
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;
global.localStorage = dom.window.localStorage;
global.sessionStorage = dom.window.sessionStorage;

global.fetch = require("node-fetch");