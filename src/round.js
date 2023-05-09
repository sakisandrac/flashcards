const createRound = (deck) => {
  return {
    deck: deck.deck,
    currentCard: deck.deck[0],
    turns: 0,
    incorrectGuesses: [],
  }
}

const calculatePercentCorrect = (round) => {
  let percent = 1 - round.incorrectGuesses.length / round.turns
  return percent * 100
}

const endRound = (round) => {
  let result = calculatePercentCorrect(round)
  
  console.log(`** Round over! ** You answered ${result}% of the questions correctly!`)
  
  return `** Round over! ** You answered ${result}% of the questions correctly!`
}

module.exports = {
  createRound,
  calculatePercentCorrect,
  endRound
}