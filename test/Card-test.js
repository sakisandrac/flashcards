const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { testData } = require('../test/test-data');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);

    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
    expect(card.correctAnswer).to.equal('sea otter');
  });  
});

