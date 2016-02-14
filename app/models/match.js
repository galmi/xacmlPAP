import DS from 'ember-data';

var match = DS.Model.extend({
  attributeId: DS.attr(),
  attributeValue: DS.attr()
});

match.reopenClass({
  FIXTURES: [
    {
      id: 1,
      attributeId: 'Attr1',
      attributeValue: 'Value1'
    },
    {
      id: 2,
      attributeId: 'Attr2',
      attributeValue: 'Value2'
    }
  ]
});

export default match;