var _      = require('underscore')
  , tap   = require('tap')
  , test = tap.test
  , plan = tap.plan
  ;

module.exports = exports = function(name,tests,module,selected) {
  var f, ok, test_names, total;
  if(selected) { test_names = selected.split(','); }
  else { test_names =
    _.filter(_.keys(tests), function(e) { return e.indexOf('_ok') === -1; });
  }
  total = test_names.length;
  test(name, function (t) {
    t.plan(total);
    test_names.forEach(function(name) {
      tests[name](tests[name+'_ok'](t));
    });
  });
};