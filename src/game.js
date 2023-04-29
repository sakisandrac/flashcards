const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect } = require('./card');
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

// console.log(prototypeQuestions)
// let cards = []
// let card = prototypeQuestions.forEach((card) => {
//   createCard(card.id, card.question, card.answers, card.correctAnswer)
//   cards.push(card)
// })
// console.log(cards)

function start() {
  let cards = []
  prototypeQuestions.forEach((card) => {
    createCard(card.id, card.question, card.answers, card.correctAnswer)
    cards.push(card)
  })
  console.log(cards)
  let deck = createDeck(cards);
  let round = createRound(deck)
  printMessage(deck);
  printQuestion(round);
}

start(); 

module.exports = { printMessage, printQuestion };
