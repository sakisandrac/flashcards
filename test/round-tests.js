const chai = require('chai');
const expect = chai.expect;

const { createRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { testData } = require('../test/test-data');

describe('round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function () {
    card1 = createCard(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);

    card2 = createCard(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);

    card3 = createCard(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);

    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });  

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0)
  });

  it('should come with currentCard selected', function() {
    expect(round.currentCard.id).to.deep.equal(1)
  });
});
