import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        commit(rule) {
            rule.save();
            this.get("targetObject").send('editRule');
        },
        rollback(rule) {
            rule.rollback();
            this.get("targetObject").send('editRule');
        },
        editRule() {
            return true;
        }
    }
});
