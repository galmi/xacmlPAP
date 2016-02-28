import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    normalize (modelClass, resourceHash, prop){
        resourceHash['id'] = 'value-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize(snapshot, options) {
        var json = this._super(...arguments);
        delete json.id;
        json.type = 'condition.attribute-value';

        return json;
    }
});