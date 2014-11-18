import DS from 'ember-data';
var attr = DS.attr;

var Puzzle = DS.Model.extend({
  body:         attr('string'),
  answer:       attr('string'),
  answeredAt:  attr('date')
});

Puzzle.reopenClass({
  FIXTURES: [
    {
      id: 1,
      body: "I'm a song by Jay-Z, dentists love me, and I'm usually sitting atop an inbred's head. What am I?",
      answer: 'the crown',
      answered_at: null
    }
  ]
});

export default Puzzle;
