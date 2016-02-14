import DS from 'ember-data';

var target = DS.Model.extend({
  targetAnyOf: DS.hasMany('target-any-of', {async : true})
});

target.reopenClass({
  FIXTURES: [
    {
      id: 1,
      targetAnyOf: [1]
    },
    {
      id: 2,
      targetAnyOf: [1]
    }
  ]
});

export default target;