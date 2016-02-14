import DS from 'ember-data';

export default DS.Model.extend({
  policyCombiningAlgorithm: DS.belongsTo('combining-algorithm'),
  description: DS.attr(),
  version: DS.attr(),
  target: DS.belongsTo('target'),
  policySets: DS.hasMany('policy-set'),
  policies: DS.hasMany('policy  ')
});
