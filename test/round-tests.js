const chai = require('chai');
const expect = chai.expect;

const {takeTurn, calculatePercentCorrect } = require('../src/round');
const { createCard, createRound } = require('../src/card');
const { createDeck } = require('../src/deck');

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
