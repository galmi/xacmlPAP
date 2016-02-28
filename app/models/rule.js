import DS from 'ember-data';

export default DS.Model.extend({
    isPermit: DS.attr('boolean'),
    effect: function () {
        return this.get('isPermit') ? 'Permit' : 'Deny';
    }.property('isPermit'),
    description: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    condition: DS.belongsTo('condition', {polymorphic: true, async: false})
});
