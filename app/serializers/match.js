import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalize (modelClass, resourceHash, prop){
        if (!resourceHash.hasOwnProperty('id')) {
            resourceHash['id'] = 'match-' + Math.random() * 100;
        }
        return this._super(...arguments);
    //},
    //serialize(snapshot, options) {
    //    var json = this._super(...arguments);
    //    delete json.id;
    //    console.log('serialize', json);
    //    return json;
    }
});