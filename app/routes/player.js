import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class PlayerRoute extends Route {
  @service store;

  async model(params) {
    return hash({
      player: this.store.findRecord('player', params.player_id),
      appearances: fetch(`/api/players/${params.player_id}/appearances`).then(
        (response) => response.json(),
      ),
    });
  }
}
