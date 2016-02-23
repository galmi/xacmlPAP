import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addTarget(policy) {
            var target = this.get('store').createFragment('target', {
                targetAnyOf: [
                    {
                        targetAllOf: [
                            {
                                matches: [
                                    {
                                        attributeId: 'subject',
                                        attributeValue: 'value'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
            policy.set('target', target);
        }
    }
});
