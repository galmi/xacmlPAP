import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        var peekData = this.get('store').peekAll('function-equality');
        if (!peekData.content.length) {
            this.set('data', this.get('store').findAll('function-equality'));
        } else {
            this.set('data', peekData);
        }
    }
});
