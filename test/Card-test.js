const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, createRound } = require('../src/card');
const {takeTurn, calculatePercentCorrect } = require('../src/round');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return a boolean result', function() {
    const result = evaluateGuess('object', 'object')
    expect(result).to.equal(true);
    const result2 = evaluateGuess('array', 'object')
    expect(result2).to.equal(false);
   
  });  
});

describe('deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('return an array of decks', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3])

    expect(deck).to.deep.equal([card1, card2, card3]);
  });  

  it('count number of cards in deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3])
    const length = countCards(deck)
    expect(length).to.deep.equal(3);
  });  
});

describe('round', function() {
  it('should have a deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);

    expect(round.deck).to.deep.equal(deck);
   
  });  

    it('should start with 0 turns', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      
      const deck = createDeck([card1, card2, card3]);
      
      const round = createRound(deck);

      expect(round.turns).to.equal(0)
    });

  it('should come with currentCard selected', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);

    expect(round.currentCard.id).to.deep.equal(1)
  });

  it('should update currentCard', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);
    const round1 = takeTurn('sea otter', round);

    expect(round.currentCard.id).to.deep.equal(14)
  });

  it('should update another currentCard', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);
    const round1 = takeTurn('sea otter', round);

    const round2 = takeTurn('pug', round);
   
    expect(round.currentCard.id).to.deep.equal(12)
  });

  it('should be able to check an incorrect guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('pug', round);

  expect(round1).to.deep.equal('incorrect!')
  });

  it('should be able to check a correct guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('sea otter', round);
   
  expect(round1).to.deep.equal('correct!')
  });

  it('should be able to check another correct guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('pug', round);
    const round2 = takeTurn('gallbladder', round);

  expect(round2).to.deep.equal('correct!')
  });

  it('should be able to update incorrect guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('pug', round);

  expect(round.incorrectGuesses.length).to.deep.equal(1)
  });

  it('should add 1 turn to each round', () => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('pug', round);
    
    expect(round.turns).to.equal(1);
  });

})

describe('calculate percent', function() {
  it('should calculate the percent correct', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = createDeck([card1, card2, card3]);
  
    const round = createRound(deck);
    const round1 = takeTurn('pug', round);
    const round2 = takeTurn('gallbladder', round);
    const result = calculatePercentCorrect(round);

    expect(result).to.deep.equal(50);
  });  
});
