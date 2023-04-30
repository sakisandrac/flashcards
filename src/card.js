const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer,
  }
}

const evaluateGuess = (guess, correctAnswer) => {
 if(guess === correctAnswer){
  return true;
 } else {
  return false;
 }
}

const createDeck = (cards) => {
 return cards
}

const countCards = (deck) => {
  return deck.length;
}

const createRound = (deck) => {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound
}