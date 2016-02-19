import DS from 'ember-data';

let rule = DS.Model.extend({
  isPermit: DS.attr('boolean'),
  effect: function() {
    return this.get('isPermit')?'Permit':'Deny';
  }.property('isPermit'),
  description: DS.attr(),
  target: DS.belongsTo('target', {async: true}),
  condition: DS.attr() //todo relation with Expression
});

rule.reopenClass({
  FIXTURES: [
    {
      id: 1,
      isPermit: true,
      description: "Правило 1",
      target: 1
    }
  ]
});

export default rule;