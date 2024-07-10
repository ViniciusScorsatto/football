import { module, test } from 'qunit';
import { setupRenderingTest } from 'football-new/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlayerCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PlayerCard>
        template block text
      </PlayerCard>
    `);

    assert.dom().hasText('template block text');
  });
});
