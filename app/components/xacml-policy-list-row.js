import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    isViewMode: false,
    actions: {
        removePolicy(policySet, policy) {
            policySet.get('policies').removeObject(policy);
        },
        viewPolicy() {
            if (this.get('isViewMode')) {
                this.set('isViewMode', false);
            } else {
                this.set('isViewMode', true);
            }
        }
    }
});
