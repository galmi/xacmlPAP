import DS from 'ember-data';

export default DS.Model.extend({
    effect: DS.attr(),
    description: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    condition: DS.belongsTo('expression', {polymorphic: true, async: false})
});
