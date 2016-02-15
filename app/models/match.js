import DS from 'ember-data';
import MF from 'model-fragments';

var match = MF.Fragment.extend({
  attributeId: DS.attr(),
  attributeValue: DS.attr()
});

export default match;