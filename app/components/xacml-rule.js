import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addTarget(rule) {
            var target = this.get('store').createRecord('target', {
                targetAnyOf: []
            });
            rule.set('target', target);
        },
        addConditionAttribute(rule) {
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

            var funcOr = this.get('store').createRecord('condition.apply', {
                functionId: 'func-or'
            });
            funcOr.get('conditions').pushObject(funcAnd);

            rule.set('condition', funcOr);
        }
    }
});