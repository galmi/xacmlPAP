import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInsertElement() {
        var attributes = this.get('store').findAll('attribute');
        this.set('data', attributes);
    }
});
