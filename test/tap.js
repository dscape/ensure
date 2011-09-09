var ensure = require('../ensure').use('tap')
  , tests = exports
  ;

tests.tap    = function (cb) { cb('foo'); };
tests.tap_ok = function (value)  {
  var t = this.t;
  t.equal(value,'foo'); 
};

tests.plan_works    = function (cb) { cb('bar'); };
tests.plan_works_ok = function (value)  {
  var t = this.t;
  t.equal(value,'bar');
};

ensure((__filename + '_tap'),tests,module);