import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    store: Ember.inject.service(),
    data: [],
    didInitAttrs() {
        //var me = this;
        //todo filter
        //var policySets = this.get('store').filter('policy-set', function(policySet){
        //    return policySet.get('id') !== me.get('exclude').get('id');
        //});
        this.set('data', this.get('store').findAll('policy-set'));
    }
});
