import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeTarget(parent) {
            parent.set('target', null);
        },
        addTargetAnyOf(target) {
            target.get('targetAnyOf').createFragment({
                targetAllOf: [
                    {
                        matches: [
                            {
                                attributeId: '',
                                attributeValue: ''
                            }
                        ]
                    }
                ]
            });
        }
    }
});