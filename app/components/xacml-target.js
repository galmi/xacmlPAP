import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeTarget(parent) {
            parent.set('target', null);
        },
        addTargetAnyOf(target) {
            let match = target.get('store').createRecord('match', {
                attributeId: '',
                attributeValue: ''
            });
            let targetAllOf = target.get('store').createRecord('target-all-of', {
                matches: [match]
            });
            let targetAnyOf = target.get('store').createRecord('target-any-of', {
                targetAllOf: [targetAllOf]
            });
            target.get('targetAnyOf').pushObject(targetAnyOf);
            console.log(target.serialize());
        }
    }
});