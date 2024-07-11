import EmberRouter from '@ember/routing/router';
import config from 'football-new/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('player', { path: '/players/:player_id' });
  //this.route('appearances', { path: '/player/:player_id/appearances' });
  this.route('team');
  this.route('not-found', { path: '/*' });
});
