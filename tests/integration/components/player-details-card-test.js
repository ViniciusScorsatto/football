import { module, test } from 'qunit';
import { setupRenderingTest } from 'football-new/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player-details-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlayerDetailsCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PlayerDetailsCard>
        template block text
      </PlayerDetailsCard>
    `);

    assert.dom().hasText('template block text');
  });
});
