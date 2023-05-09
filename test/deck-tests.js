const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');
const { testData } = require('../test/test-data');

describe('deck', function() {
  let card1 = createCard(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
  let card2 = createCard(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
  let card3 = createCard(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
  let deck = createDeck([card1, card2, card3]);

  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('return an array of decks', function() {
    expect(deck.deck).to.deep.equal([card1, card2, card3]);
  });  

  it('count number of cards in deck', function() {
    const length = countCards(deck)
    expect(length).to.deep.equal(3);
  });  
})
