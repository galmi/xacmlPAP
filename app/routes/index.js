import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      policy: this.store.findById('policy', 1),
      equalityFunctions: this.store.findAll('func.equality')
    };
  }
});
