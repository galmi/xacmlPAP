import DS from 'ember-data';

export default DS.Model.extend({
    matches: DS.hasMany('match', {async: false})
});
