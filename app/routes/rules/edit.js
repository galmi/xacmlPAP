import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var rule = this.store.findRecord('rule', params.rule_id);
        console.log(rule);
        return rule;
    }
});
