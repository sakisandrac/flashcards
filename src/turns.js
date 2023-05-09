const evaluateGuess = (guess, correctAnswer) => {
  if(guess === correctAnswer){
   return true;
  } else {
   return false;
  }
 }
 
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

const updateRound = (result, round) => {
  if (result) {
    round.deck.shift();
    } else {
      let repeat = round.deck.shift();
      repeat.question = "LET'S TRY AGAIN: " + repeat.question;
      round.deck.push(repeat);
    }

  round.turns += 1;
  round.currentCard = round.deck[0]
}

const takeTurn = (guess, round) => {
  let result = evaluateGuess(guess, round.currentCard.correctAnswer);
  
  storeIncorrectGuesses(result, round);

  updateRound(result,round);

  return giveFeedback(result);
}

 module.exports = {
  evaluateGuess,
  takeTurn
 }