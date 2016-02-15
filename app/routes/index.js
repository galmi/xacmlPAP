import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      targets: this.store.findAll('target')
    }
  }
});
