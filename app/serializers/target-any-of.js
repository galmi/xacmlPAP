import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        targetAllOf: { embedded: 'always' }
    },
    normalize (modelClass, resourceHash, prop){
        resourceHash['id'] = 'target-any-of-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize(snapshot, options) {
        var json = this._super(...arguments);
        delete json.id;

        return json;
    }
});