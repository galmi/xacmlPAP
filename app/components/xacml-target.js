import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
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
        },
        serialize(target) {
            console.log(target.serialize());
        }
    }
});