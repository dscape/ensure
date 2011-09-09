var ensure = require('../ensure').use('tap')
  , tests = exports
  ;

tests.tap    = function (cb) { cb('foo'); };
tests.tap_ok = function (t) { 
  return function (value)  { t.equal(value,'foo'); }; 
};

tests.plan_works    = function (cb) { cb('bar'); };
tests.plan_works_ok = function (t) { 
  return function (value)  { t.equal(value,'bar'); }; 
};

ensure((__filename + '_tap'),tests,module);