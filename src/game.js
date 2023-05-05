const { createCard, createRound } = require('./card');
const { createDeck, countCards } = require('./deck');
const fetch = require('node-fetch');

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

async function getTrivia() {
  let res = await fetch('https://opentdb.com/api.php?amount=10&category=11');
  return await res.json();
}

async function filmTrivia() {
  let data = await getTrivia();
  return await data.results.map((film) => {
    return {
      id: data.results.indexOf(film) +1,
      question: film.question,
      answers: [...film.incorrect_answers, film.correct_answer].sort(),
      correctAnswer: film.correct_answer
      }
  })
}

async function start() {
  let cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
  // to use a different data set, comment out lines 36-38 and uncomment line 40
  // let cards = await filmTrivia(); 
  let deck = createDeck(cards);
  let round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
}


module.exports = { printMessage, printQuestion, start };
