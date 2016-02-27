import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    isViewMode: false,
    actions: {
        removePolicySet(policySet, childPolicySet) {
            policySet.get('policySets').removeObject(childPolicySet);
        },
        viewPolicySet() {
            if (this.get('isViewMode')) {
                this.set('isViewMode', false);
            } else {
                this.set('isViewMode', true);
            }
        }
    }
});
