import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    normalize (modelClass, resourceHash){
        resourceHash['id'] = 'value-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize() {
        var json = this._super(...arguments);
        delete json.id;
        json.type = 'expression.attribute-value';

        return json;
    }
});