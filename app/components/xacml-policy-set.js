import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    selectedPolicySet: null,
    selectedPolicy: null,
    actions: {
        addTarget(policySet) {
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
            policySet.set('target', target);
        },
        removePolicySets(policySet) {
            policySet.set('policySets', []);
        },
        addPolicySet(policySet) {
            var selectedPolicySet = this.get('selectedPolicySet');
            if (selectedPolicySet) {
                var newPolicySet = this.get('store').peekRecord('policy-set', selectedPolicySet);
                policySet.get('policySets').pushObject(newPolicySet);
            }
        },
        removePolicies(policy) {
            policy.set('policies', []);
        },
        addPolicy(policySet) {
            var selectedPolicy = this.get('selectedPolicy');
            if (selectedPolicy) {
                var policy = this.get('store').peekRecord('policy', selectedPolicy);
                policySet.get('policies').pushObject(policy);
            }
        }
    }
});
