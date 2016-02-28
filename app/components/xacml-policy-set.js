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
                this.get('store').findRecord('policy-set', selectedPolicySet).then(function(newPolicySet){
                    policySet.get('policySets').pushObject(newPolicySet);
                });
            }
        },
        removePolicies(policy) {
            policy.set('policies', []);
        },
        addPolicy(policy) {
            var selectedPolicy = this.get('selectedPolicy');
            if (selectedPolicy) {
                this.get('store').findRecord('policy', selectedPolicy).then(function(newPolicy){
                    policy.get('policies').pushObject(newPolicy);
                });
            }
        }
    }
});
