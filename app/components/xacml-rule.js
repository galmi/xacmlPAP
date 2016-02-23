import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        addTarget(rule) {
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
            rule.set('target', target);
        },
        addConditionAttribute(rule) {
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

            var funcOr = this.get('store').createFragment('condition.apply', {
                functionId: 'func-or'
            });
            funcOr.get('conditions').addFragment(funcAnd);

            rule.set('condition', funcOr);
        },
        addConditionLogic(rule) {

        }
    }
});