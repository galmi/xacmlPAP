import DS from 'ember-data';

export default DS.Model.extend({
    targetAnyOf: DS.hasMany('target-any-of', {async: false})
});
