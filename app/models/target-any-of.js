import DS from 'ember-data';

var targetAnyOf = DS.Model.extend({
  targetAllOf: DS.hasMany('target-all-of', {async : true})
});

targetAnyOf.reopenClass({
  FIXTURES: [
    {
      id: 1,
      targetAllOf: [1]
    }
  ]
});

export default targetAnyOf;