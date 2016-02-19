import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      rule: this.store.findById('rule', 1)
    };
  }
});
