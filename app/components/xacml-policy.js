import Ember from 'ember';

var xacmlPolicy = Ember.Component.extend({
    store: Ember.inject.service(),
    selectedRule: null,
    actions: {
        addTarget(policy) {
            var target = this.get('store').createRecord('target', {
                targetAnyOf: []
            });
            policy.set('target', target);
        },
        removeRules(policy) {
            policy.set('rules', null);
        },
        addRule(policy) {
            var selectedRule = this.get('selectedRule');
            if (selectedRule) {
                this.get('store').findRecord('rule', selectedRule).then(function(rule){
                    policy.get('rules').pushObject(rule);
                });
            }
        }
    }
});

xacmlPolicy.reopenClass({
    ruleSelect: 2
});

export default xacmlPolicy;