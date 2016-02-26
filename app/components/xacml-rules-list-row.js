import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    isViewMode: false,
    isEditMode: false,
    actions: {
        removeRule(policy, rule) {
            policy.get('rules').removeObject(rule);
        },
        viewRule() {
            this.set('isEditMode', false);
            if (this.get('isViewMode')) {
                this.set('isViewMode', false);
            } else {
                this.set('isViewMode', true);
            }
        },
        editRule() {
            this.set('isViewMode', false);
            if (this.get('isEditMode')) {
                this.set('isEditMode', false);
            } else {
                this.set('isEditMode', true);
            }
        }
    }
});
