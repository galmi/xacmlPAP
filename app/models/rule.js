import DS from 'ember-data';
import MF from 'model-fragments';

let rule = DS.Model.extend({
  isPermit: DS.attr('boolean'),
  effect: function() {
    return this.get('isPermit')?'Permit':'Deny';
  }.property('isPermit'),
  description: DS.attr(),
  target: DS.belongsTo('target', {async: true}),
  condition: MF.Fragment('condition', { polymorphic: true, typeKey: '$type' })
});

rule.reopenClass({
  FIXTURES: [
    {
      id: 1,
      isPermit: true,
      description: "Правило 1",
      target: 1
    },
    {
      id: 2,
      isPermit: true,
      description: "Правило 2",
      target: null
    }
  ]
});

export default rule;