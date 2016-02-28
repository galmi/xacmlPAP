import Ember from 'ember';
import DS from 'ember-data';
import { warn } from "ember-data/-private/debug";

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        conditions: { embedded: 'always' }
    },
    normalize (modelClass, resourceHash, prop){
        resourceHash['id'] = 'apply-' + Math.random()*100;
        return this._super(...arguments);
    },
    serialize(snapshot, options) {
        var json = this._super(...arguments);
        delete json.id;
        json.type = 'condition.apply';

        return json;
    }
});