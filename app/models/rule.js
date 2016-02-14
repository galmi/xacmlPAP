import DS from 'ember-data';

export default DS.Model.extend({
  effect: DS.attr(),
  description: DS.attr(),
  target: DS.belongsTo('target'),
  condition: DS.attr() //todo relation with Expression
});
