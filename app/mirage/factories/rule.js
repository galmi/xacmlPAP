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
        type: 'expression.apply',
        functionId: 'func-or',
        expressions: [
            {
                id: 2,
                type: 'expression.apply',
                functionId: 'func-and',
                expressions: [
                    {
                        id: 3,
                        type: 'expression.apply',
                        functionId: 'func-equal',
                        expressions: [
                            {
                                id: 4,
                                type: 'expression.attribute-designator',
                                attributeId: 'environment'
                            },
                            {
                                id: 5,
                                type: 'expression.attribute-value',
                                attributeValue: '123'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});
