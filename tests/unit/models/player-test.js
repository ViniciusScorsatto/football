import { setupTest } from 'football-new/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | player', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('player', {});
    assert.ok(model, 'model exists');
  });
});
