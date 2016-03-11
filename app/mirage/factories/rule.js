/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    description(i) {
        return `Rule ${i}`;
    },
    effect: 'Permit',
    target: {
        targetAnyOf: [
            {
                id: 1,
                targetAllOf: [
                    {
                        id: 1,
                        matches: [
                            {
                                id: 1,
                                attributeId: 'subject',
                                attributeValue: 'Value1'
                            },
                            {
                                id: 2,
                                attributeId: 'Attr2',
                                attributeValue: 'Value2'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    condition: {
        id: 1,
        type: 'condition.apply',
        functionId: 'func-or',
        conditions: [
            {
                id: 2,
                type: 'condition.apply',
                functionId: 'func-and',
                conditions: [
                    {
                        id: 3,
                        type: 'condition.apply',
                        functionId: 'func-equal',
                        conditions: [
                            {
                                id: 4,
                                type: 'condition.attribute-designator',
                                attributeId: 'environment'
                            },
                            {
                                id: 5,
                                type: 'condition.attribute-value',
                                attributeValue: '123'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
