import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        var rules = this.get('store').findAll('rule');
        this.set('data', rules);
    }
});
