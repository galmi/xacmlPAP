import DS from 'ember-data';
import MF from 'model-fragments';

let policySet = DS.Model.extend({
    policyCombiningAlgorithm: DS.belongsTo('combining-algorithm'),
    description: DS.attr(),
    version: DS.attr(),
    target: MF.fragment('target'),
    policySets: DS.hasMany('policy-set'),
    policies: DS.hasMany('policy')
});

policySet.reopenClass({
    FIXTURES: [{
        id: 1,
        policyCombiningAlgorithm: 'first',
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