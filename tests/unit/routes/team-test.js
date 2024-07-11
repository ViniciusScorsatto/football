import { module, test } from 'qunit';
import { setupTest } from 'football-new/tests/helpers';

module('Unit | Route | team', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:team');
    assert.ok(route);
  });
});
