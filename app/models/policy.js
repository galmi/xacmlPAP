import DS from 'ember-data';

let policy = DS.Model.extend({
    version: DS.attr(),
    description: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    ruleCombiningAlgorithm: DS.attr(), //DS.belongsTo('combining-algorithm'),
    rules: DS.hasMany('rule', {async: true})
});

policy.reopenClass({
    FIXTURES: [
        {
            id: 1,
            description: "Policy 1",
            ruleCombiningAlgorithm: 'First applicable',
            target: {
                targetAnyOf: [
                    {
                        targetAllOf: [
                            {
                                matches: [
                                    {
                                        attributeId: 'subject',
                                        attributeValue: 'Value1'
                                    },
                                    {
                                        attributeId: 'Attr2',
                                        attributeValue: 'Value2'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            rules: [1]
        }
    ]
});

export default policy;