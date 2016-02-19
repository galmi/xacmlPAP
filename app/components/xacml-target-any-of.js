import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addTargetMatch(targetAnyOf) {
            targetAnyOf.get('targetAllOf').every(function (targetAllOf) {
                targetAllOf.get('matches').createFragment({
                    attributeId: '',
                    attributeValue: ''
                });
            });
        },
        removeTargetAnyOf(target, targetAnyOf) {
            target.get('targetAnyOf').removeFragment(targetAnyOf);
        }
    }
});