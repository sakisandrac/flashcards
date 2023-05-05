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
  let cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  })
  let deck = createDeck(cards);
  let round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };
