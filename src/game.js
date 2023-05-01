const { createCard, createRound } = require('./card');
const { createDeck, countCards } = require('./deck');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let cards = [];
  prototypeQuestions.forEach((card) => {
    createCard(card.id, card.question, card.answers, card.correctAnswer)
    cards.push(card);
  })
  let deck = createDeck(prototypeQuestions);
  let round = createRound(deck);
 console.log('card id in start', round.currentCard.id)

  printMessage(deck);
  printQuestion(round);
}

start(); 

module.exports = { printMessage, printQuestion };
