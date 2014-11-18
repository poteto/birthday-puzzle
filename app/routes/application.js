import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.transitionTo('puzzle.index', 1);
  }
});
