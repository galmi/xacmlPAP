import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addOrCondition(parentCondition) {
            var designator = this.get('store').createFragment('condition.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createFragment('condition.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createFragment('condition.apply', {
                functionId: 'is-equal'
            });
            apply.get('conditions').addFragment(designator);
            apply.get('conditions').addFragment(value);

            var funcAnd = this.get('store').createFragment('condition.apply', {
                functionId: 'func-and'
            });
            funcAnd.get('conditions').addFragment(apply);

            parentCondition.get('conditions').addFragment(funcAnd);
        },

        addAndCondition(parentCondition) {
            var designator = this.get('store').createFragment('condition.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createFragment('condition.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createFragment('condition.apply', {
                functionId: 'is-equal'
            });
            apply.get('conditions').addFragment(designator);
            apply.get('conditions').addFragment(value);

            parentCondition.get('conditions').addFragment(apply);
        },

        removeCondition(parentCondition, condition) {
            parentCondition.get('conditions').removeFragment(condition);
        },

        removeRuleCondition(rule) {
            rule.set('condition', null);
        }
    }
});
