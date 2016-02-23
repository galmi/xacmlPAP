import MF from 'model-fragments';

var target = MF.Fragment.extend({
  targetAnyOf: MF.fragmentArray('target-any-of')
});

target.reopenClass({
  FIXTURES: [
    {
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