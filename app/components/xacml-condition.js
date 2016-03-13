import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addOrCondition(parentCondition) {
            var designator = this.get('store').createRecord('expression.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createRecord('expression.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createRecord('expression.apply', {
                functionId: 'is-equal'
            });
            apply.get('expressions').pushObject(designator);
            apply.get('expressions').pushObject(value);

            var funcAnd = this.get('store').createRecord('expression.apply', {
                functionId: 'func-and'
            });
            funcAnd.get('expressions').pushObject(apply);

            parentCondition.get('expressions').pushObject(funcAnd);
        },

        addAndCondition(parentCondition) {
            var designator = this.get('store').createRecord('expression.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createRecord('expression.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createRecord('expression.apply', {
                functionId: 'is-equal'
            });
            apply.get('expressions').pushObject(designator);
            apply.get('expressions').pushObject(value);

            parentCondition.get('expressions').pushObject(apply);
        },

        removeCondition(parentCondition, condition) {
            parentCondition.get('expressions').removeObject(condition);
        },

        removeRuleCondition(rule) {
            rule.set('condition', null);
        }
    }
});
