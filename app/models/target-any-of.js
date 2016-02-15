import MF from 'model-fragments';

var targetAnyOf = MF.Fragment.extend({
  targetAllOf: MF.fragmentArray('target-all-of')
});

export default targetAnyOf;