import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model){
    if ( !model.get('answeredAt') ) {
      this.transitionTo('puzzle.index');
    }
  }
});
