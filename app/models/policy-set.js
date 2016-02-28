import DS from 'ember-data';

let policySet = DS.Model.extend({
    policyCombiningAlgorithm: DS.belongsTo('combining-algorithm', {async: true}),
    description: DS.attr(),
    version: DS.attr(),
    target: DS.belongsTo('target', {async: false}),
    policySets: DS.hasMany('policy-set', {async: true, inverse: 'parentSet'}),
    parentSet: DS.belongsTo('policy-set', { inverse: 'policySets' }),
    policies: DS.hasMany('policy', {async: true})
});

policySet.reopenClass({
    FIXTURES: [{
        id: 1,
        description: 'Policy Set',
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
        }
    }, {
        id: 2,
        policyCombiningAlgorithm: 'first',
        description: 'Policy Set2',
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
        policySets: [1],
        policies: [1]
    }]
});
export default policySet;