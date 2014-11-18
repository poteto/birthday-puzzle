import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('puzzle', { path: 'puzzles/:puzzle_id' }, function() {
    this.route('answer');
  });
});

export default Router;
