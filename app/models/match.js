import DS from 'ember-data';

export default DS.Model.extend({
  attributeId: DS.attr(),
  attributeValue: DS.attr()
});
