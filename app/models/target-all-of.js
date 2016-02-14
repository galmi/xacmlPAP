import DS from 'ember-data';

var targetAllOf = DS.Model.extend({
  matches: DS.hasMany('match', {async : true})
});

targetAllOf.reopenClass({
  FIXTURES: [
    {
      id: 1,
      matches: [1, 2]
    }
  ]
});

export default targetAllOf;