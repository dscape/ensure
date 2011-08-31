var ensure = require('../ensure')
  , assert = require('assert')
  , tests = exports;

tests.foo = function (callback) {
  callback(true);
};

tests.foo_ok = function (t) {
  assert.ok(t);
};

ensure('foo', tests, module);