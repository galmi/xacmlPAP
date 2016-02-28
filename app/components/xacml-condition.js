import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addOrCondition(parentCondition) {
            var designator = this.get('store').createRecord('condition.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createRecord('condition.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createRecord('condition.apply', {
                functionId: 'is-equal'
            });
            apply.get('conditions').pushObject(designator);
            apply.get('conditions').pushObject(value);

            var funcAnd = this.get('store').createRecord('condition.apply', {
                functionId: 'func-and'
            });
            funcAnd.get('conditions').pushObject(apply);

            parentCondition.get('conditions').pushObject(funcAnd);
        },

        addAndCondition(parentCondition) {
            var designator = this.get('store').createRecord('condition.attribute-designator', {
                attributeId: 'environment'
            });
            var value = this.get('store').createRecord('condition.attribute-value', {
                value: '321'
            });
            var apply = this.get('store').createRecord('condition.apply', {
                functionId: 'is-equal'
            });
            apply.get('conditions').pushObject(designator);
            apply.get('conditions').pushObject(value);

            parentCondition.get('conditions').pushObject(apply);
        },

        removeCondition(parentCondition, condition) {
            parentCondition.get('conditions').removeObject(condition);
        },

        removeRuleCondition(rule) {
            rule.set('condition', null);
        }
    }
});
