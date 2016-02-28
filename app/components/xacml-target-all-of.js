import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addTargetMatch(targetAllOf) {
            let match = targetAllOf.get('store').createRecord('match', {
                attributeId: '',
                attributeValue: ''
            });
            targetAllOf.get('matches').pushObject(match);
        }
    }
});