import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        matches: { embedded: 'always' }
    },
    normalize (modelClass, resourceHash, prop){
        resourceHash['id'] = 'target-all-of-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize(snapshot, options) {
        var json = this._super(...arguments);
        delete json.id;

        return json;
    }
});