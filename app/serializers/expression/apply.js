import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        expressions: { embedded: 'always' }
    },
    normalize (modelClass, resourceHash){
        resourceHash['id'] = 'apply-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize() {
        var json = this._super(...arguments);
        delete json.id;
        json.type = 'expression.apply';

        return json;
    }
});