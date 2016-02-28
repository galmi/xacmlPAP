import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        commit(policy) {
            policy.save();
            this.transitionToRoute('policies');
        },
        rollback(policy) {
            policy.rollbackAttributes();
            this.transitionToRoute('policies');
        }
    }
});
