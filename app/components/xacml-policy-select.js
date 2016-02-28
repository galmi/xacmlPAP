import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        var policies = this.get('store').findAll('policy');
        this.set('data', policies);
    }
});
