import DS from 'ember-data';
import MF from 'model-fragments';

var target = DS.Model.extend({
  targetAnyOf: MF.fragmentArray('target-any-of')
});

target.reopenClass({
  FIXTURES: [
    {
      id: 1,
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
  ]
});

export default target;