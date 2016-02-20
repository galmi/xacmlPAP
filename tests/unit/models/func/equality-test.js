import { moduleForModel, test } from 'ember-qunit';

moduleForModel('func/equality', 'Unit | Model | func/equality', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
