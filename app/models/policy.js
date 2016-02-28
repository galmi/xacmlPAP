import DS from 'ember-data';

export default DS.Model.extend({
    version: DS.attr(),
    description: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    ruleCombiningAlgorithm: DS.attr(), //DS.belongsTo('combining-algorithm'),
    rules: DS.hasMany('rule', {async: true})
});
