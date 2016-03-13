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

});
