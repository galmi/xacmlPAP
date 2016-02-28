import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        target: { embedded: 'always' },
        condition: { embedded: 'always' }
    },
    serializePolymorphicType(snapshot, json, relationship) {
        var key = relationship.key;
        var belongsTo = snapshot.belongsTo(key);

        if (!Ember.isNone(belongsTo)) {
            json[key]['type'] = belongsTo.modelName;
        }
    }
});