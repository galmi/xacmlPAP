import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('policy-set', params.policy_set_id);
    }
});
