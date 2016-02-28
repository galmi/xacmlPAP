import DS from 'ember-data';

export default DS.Model.extend({
    policyCombiningAlgorithm: DS.attr(),//DS.belongsTo('combining-algorithm', {async: true}),
    description: DS.attr(),
    version: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    policySets: DS.hasMany('policy-set', {async: true, inverse: 'parentSet'}),
    parentSet: DS.belongsTo('policy-set', { inverse: 'policySets' }),
    policies: DS.hasMany('policy', {async: true})
});
