import Ember from 'ember';

var xacmlPolicy = Ember.Component.extend({
    store: Ember.inject.service(),
    selectedRule: null,
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
        },
        removeRules(policy) {
            policy.set('rules', null);
        },
        addRule(policy) {
            var selectedRule = this.get('selectedRule');
            if (selectedRule) {
                var rule = this.get('store').peekRecord('rule', selectedRule);
                policy.get('rules').pushObject(rule);
            }
        }
    }
});

xacmlPolicy.reopenClass({
    ruleSelect: 2
});

export default xacmlPolicy;