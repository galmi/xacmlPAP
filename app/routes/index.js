import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      policy: this.store.findRecord('policy', 1),
      equalityFunctions: this.store.findAll('func.equality')
    };
  }
});
