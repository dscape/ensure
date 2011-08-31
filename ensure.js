var _      = require('underscore')
  , vows   = require('vows')
  , assert = require('assert')
  , batch  = {}
  , f, ok, test_names;


module.exports = exports = function(name,tests,module) {
  test_names = _.filter(_.keys(tests), function(e){ return e.indexOf('_ok') === -1; });
  _.foldl(test_names, function(memo,e) {
    t  = eval('tests.'+ e);
    ok = eval('tests.'+ e + '_ok');
    memo[e] = { topic: function () { t(this.callback); }
              , ok: ok 
              }; 
    return memo; }, batch);
  vows.describe('foo').addBatch(batch).exportTo(module);
};