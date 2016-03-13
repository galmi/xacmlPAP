import Ember from 'ember';
import DS from 'ember-data';
import Expression from '../expression';

export default Expression.extend({
    functionId: DS.attr(),
    description: DS.attr(),
    expressions: DS.hasMany('expression', { polymorphic: true, async: false }),
    isFuncAnd: Ember.computed('functionId', function() {
        return (this.get('functionId') === 'func-and');
    }),
    isFuncOr: Ember.computed('functionId', function() {
        return (this.get('functionId') === 'func-or');
    }),
    firstExpression: Ember.computed('expressions', function() {
        return this.get('expressions').get('firstObject');
    }),
    lastExpression: Ember.computed('expressions', function() {
        return this.get('expressions').get('lastObject');
    })

});
