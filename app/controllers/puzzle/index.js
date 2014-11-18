import Ember from 'ember';

export default Ember.ObjectController.extend({
  attempt:  null,
  prompt:   null,

  actions: {
    checkAnswer: function() {
    var attemptedAnswer, correctAnswer;
    attemptedAnswer = this.get('attempt').toLowerCase();
    correctAnswer = this.get('answer');

    if ( attemptedAnswer === correctAnswer ) {
      this.setProperties({
        answeredAt: new Date(),
        prompt: 'You got it! Redirecting...'
      });
      Ember.run.later(this, function(){
        this.transitionToRoute('puzzle.answer');
      }, 3000);
    } else if ( attemptedAnswer.match(/crown/i) ) {
      this.set('prompt', "That's not how I say it... Try again!");
    } else {
      this.set('prompt', "That's not the right answer.");
    }
    }
  }

});
