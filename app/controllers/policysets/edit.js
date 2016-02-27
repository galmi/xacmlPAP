import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        commit(policySet) {
            policySet.save();
            this.transitionToRoute('policysets');
        },
        rollback(policySet) {
            policySet.rollback();
            this.transitionToRoute('policysets');
        }
    }
});
