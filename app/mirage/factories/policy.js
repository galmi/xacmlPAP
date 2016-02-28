/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    description(i) {
        return `Policy ${i}`;
    },
    ruleCombiningAlgorithm: 'First applicable',
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
    rules: [1]

});
