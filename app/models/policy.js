import DS from 'ember-data';

let policy = DS.Model.extend({
  version: DS.attr(),
  description: DS.attr(),
  target: DS.belongsTo('target', {async: true}),
  ruleCombiningAlgorithm: DS.attr(), //DS.belongsTo('combining-algorithm'),
  rules: DS.hasMany('rule', {async: true})
});

policy.reopenClass({
  FIXTURES: [
    {
      id: 1,
      description: "Policy 1",
      ruleCombiningAlgorithm: 'First applicable',
      target: 1,
      rules: [1, 2]
    }
  ]
});

export default policy;