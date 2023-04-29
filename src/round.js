const { evaluateGuess } = require('../src/card');

const takeTurn = (guess, round) => {
  round.currentCard = round.deck[round.turns];
  round.turns += 1;

  result = evaluateGuess(guess, round.currentCard.correctAnswer);

  if(result === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id);
  }
  
  return result;
}

const calculatePercentCorrect = (round) => {
  let percent = 1 - round.incorrectGuesses.length / round.turns
  return percent * 100
}

const endRound = (round) => {
  let result = calculatePercentCorrect(round)
  return `** Round over! ** You answered ${result} of the questions correctly!`
}

module.exports = {
  takeTurn, 
  calculatePercentCorrect,
  endRound
}