import MF from 'model-fragments';

var targetAllOf = MF.Fragment.extend({
  matches: MF.fragmentArray('match')
});

export default targetAllOf;