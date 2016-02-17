import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeMatch(targetAllOf, match) {
            targetAllOf.get('matches').removeFragment(match);
        }
    }
});