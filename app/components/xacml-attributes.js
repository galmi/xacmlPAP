import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        var peekData = this.get('store').peekAll('attribute');
        if (!peekData.content.length) {
            this.set('data', this.get('store').findAll('attribute'));
        } else {
            this.set('data', peekData);
        }
    }
});
