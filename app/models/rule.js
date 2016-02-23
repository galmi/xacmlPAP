import DS from 'ember-data';
import MF from 'model-fragments';

let rule = DS.Model.extend({
    isPermit: DS.attr('boolean'),
    effect: function () {
        return this.get('isPermit') ? 'Permit' : 'Deny';
    }.property('isPermit'),
    description: DS.attr(),
    target: MF.fragment('target'),
    condition: MF.fragment('condition', {polymorphic: true, typeKey: '$type'})
});

rule.reopenClass({
    FIXTURES: [
        {
            id: 1,
            isPermit: true,
            description: "Правило 1",
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
        },
        {
            id: 2,
            isPermit: true,
            description: "Правило 2"
        }
    ]
});

export default rule;