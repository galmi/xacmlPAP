import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        var algorithms = this.get('store').findAll('combining-algorithm');
        this.set('data', algorithms);
    }
});
