var ensure = require('../ensure').use('tap')
  , tests = exports
  ;

tests.tap    = function (cb) { cb('foo'); };
tests.tap_ok = function (value)  {
  var t = this.t;
  t.equal(value,'foo','foo works'); 
};

tests.plan_works    = function (cb) { cb('bar'); };
tests.plan_works_ok = function (value)  {
  var t = this.t;
  t.equal(value,'bar','plan tests work');
};

ensure('tap',tests,module,process.argv[2]);