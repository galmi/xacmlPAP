import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addTargetMatch(targetAllOf) {
            targetAllOf.get('matches').createFragment({
                attributeId: '',
                attributeValue: ''
            });
        }
    }
});