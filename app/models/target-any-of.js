import DS from 'ember-data';

export default DS.Model.extend({
    targetAllOf: DS.hasMany('target-all-of', {async: false})
});
