const { evaluateGuess } = require('./turns');

const giveFeedback = (guess) => {
  if (guess) {
    return 'correct!';
  } else {
   return 'incorrect!';
  }
}

const storeIncorrectGuesses = (result, round) => {
  if(!result){
    round.incorrectGuesses.push(round.currentCard.id);
  }
}

const updateRound = (round) => {
  round.turns += 1;
  round.deck.shift();
  round.currentCard = round.deck[0]
}

const takeTurn = (guess, round) => {
  let result = evaluateGuess(guess, round.currentCard.correctAnswer);
  storeIncorrectGuesses(result, round);

  updateRound(round);

  return giveFeedback(result);
}

const calculatePercentCorrect = (round) => {
  let percent = 1 - round.incorrectGuesses.length / round.turns
  return percent * 100
}

const endRound = (round) => {
  let result = calculatePercentCorrect(round)
  console.log(`** Round over! ** You answered ${result} of the questions correctly!`)
  return `** Round over! ** You answered ${result} of the questions correctly!`
}

module.exports = {
  takeTurn, 
  calculatePercentCorrect,
  endRound
}