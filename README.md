# ensure

`ensure` is just a simple way to use vows without all the extra stuff

# installation

1. install [npm][1]
2. `npm install ensure`

# usage

      var ensure = require('ensure')
        , assert = require('assert')
        , tests = exports;
      
      tests.foo = function (callback) {
        callback(true);
      };
      
      tests.foo_ok = function (t) {
        assert.ok(t);
      };
      
      ensure('foo', tests, module);

[1]: http://npmjs.org