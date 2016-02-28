import Ember from 'ember';
import DS from 'ember-data';
import Condition from '../condition';

export default Condition.extend({
    functionId: DS.attr(),
    description: DS.attr(),
    conditions: DS.hasMany('condition', { polymorphic: true, async: false }),
    isFuncAnd: Ember.computed('functionId', function() {
        return (this.get('functionId') === 'func-and');
    }),
    isFuncOr: Ember.computed('functionId', function() {
        return (this.get('functionId') === 'func-or');
    }),
    firstCondition: Ember.computed('conditions', function() {
        return this.get('conditions').get('firstObject');
    }),
    lastCondition: Ember.computed('conditions', function() {
        return this.get('conditions').get('lastObject');
    })

});
