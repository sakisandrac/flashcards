const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer,
  }
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
  createRound
}