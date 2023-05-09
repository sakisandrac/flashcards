const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess, takeTurn } = require('../src/turns');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, calculatePercentCorrect } = require('../src/round');
const { testData } = require('../test/test-data');

describe('turn', function() {
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

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return a boolean result', function() {
    const result = evaluateGuess('object', 'object')
    const result2 = evaluateGuess('array', 'object')

    expect(result).to.equal(true);
    expect(result2).to.equal(false);
  });  

  it('should update currentCard', function() {
    const round1 = takeTurn('sea otter', round);

    expect(round.currentCard.id).to.deep.equal(14)
  });

  it('should update another currentCard', function() {
    const round1 = takeTurn('sea otter', round);
    const round2 = takeTurn('pug', round);

    expect(round.currentCard.id).to.deep.equal(12)
  });

  it('should be able to check an incorrect guess', function() {
    const round2 = takeTurn('pug', round);

    expect(round2).to.deep.equal('incorrect!')
  });

  it('should be able to check a correct guess', function() {
    const round1 = takeTurn('sea otter', round);

    expect(round1).to.deep.equal('correct!')
  });

  it('should be able to check another correct guess', function() {
    const round1 = takeTurn('pug', round);
    const round2 = takeTurn('gallbladder', round);

    expect(round2).to.deep.equal('correct!')
  });

  it('should be able to update incorrect guesses array', function() {
    takeTurn('pug', round);

    expect(round.incorrectGuesses.length).to.deep.equal(1)
  });

  it('should add 1 turn to each round', () => {
    takeTurn('pug', round);

    expect(round.turns).to.equal(1);
  });
});

describe('calculate percent', function() {
  it('should calculate the percent correct', function() {
    let card1 = createCard(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    let card2 = createCard(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    let card3 = createCard(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    let deck = createDeck([card1, card2, card3]);
    let round = createRound(deck);
    const round1 = takeTurn('pug', round);
    const round2 = takeTurn('gallbladder', round);
    const result = calculatePercentCorrect(round);

    expect(result).to.deep.equal(50);
  });  
});
