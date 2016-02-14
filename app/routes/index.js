import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      targets: this.store.find('target')
      //matches: this.store.findAll('match'),
      //targetAnyOf: this.store.findAll('target-any-of'),
      //targetAllOf: this.store.findAll('target-all-of')
    }
  }
});
