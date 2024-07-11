import Model, { attr } from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr fullName;
  @attr club;
  @attr clubLogoUrl;
  @attr position;
  @attr marketValue;
  @attr photoUrl;
}
