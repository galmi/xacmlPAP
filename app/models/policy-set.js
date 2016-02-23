import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  policyCombiningAlgorithm: DS.belongsTo('combining-algorithm'),
  description: DS.attr(),
  version: DS.attr(),
  target: MF.fragment('target'),
  policySets: DS.hasMany('policy-set'),
  policies: DS.hasMany('policy')
});
