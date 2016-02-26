import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInsertElement() {
        var rules = this.get('store').findAll('rule');
        this.set('data', rules);
    }
});
