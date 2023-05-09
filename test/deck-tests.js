const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('deck', function() {
  const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const deck = createDeck([card1, card2, card3])

  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('return an array of decks', function() {
    expect(deck).to.deep.equal([card1, card2, card3]);
  });  

  it('count number of cards in deck', function() {
    const length = countCards(deck)
    expect(length).to.deep.equal(3);
  });  
})
