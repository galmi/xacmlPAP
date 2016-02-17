import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeTargetAnyOf(target, targetAnyOf) {
            target.get('targetAnyOf').removeFragment(targetAnyOf);
        }
    }
});