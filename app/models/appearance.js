import Model, { attr } from '@ember-data/model';

export default class AppearanceModel extends Model {
  @attr date;
  @attr opponent;
  @attr ownTeamGoals;
  @attr opponentGoals;
  @attr isHomeMatch;
}
