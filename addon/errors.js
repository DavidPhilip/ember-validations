import Ember from 'ember';
import DS from 'ember-data';

const {
  A: emberArray,
  get,
  set
} = Ember;

export default DS.Errors.extend({
  unknownProperty(property) {
    set(this, property, emberArray());
    return get(this, property);
  }
});
