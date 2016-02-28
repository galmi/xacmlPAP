import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        commit(rule) {
            console.log(rule.serialize());
            rule.save();
            this.transitionToRoute('rules');
        },
        rollback(rule) {
            rule.rollbackAttributes();
            this.transitionToRoute('rules');
        }
    }
});
