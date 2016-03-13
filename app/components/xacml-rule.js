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

            var funcOr = this.get('store').createRecord('expression.apply', {
                functionId: 'func-or'
            });
            funcOr.get('expressions').pushObject(funcAnd);

            rule.set('condition', funcOr);
        }
    }
});