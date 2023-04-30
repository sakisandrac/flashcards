const inquirer = require('inquirer');
const { takeTurn, endRound } = require('./round')
const genList = (round) => {
  let card = round.currentCard;
  // let card = round.deck[0]
  // when i change card to round.deck[0] it works, so the currentCard seems like it is not updating. to fix, figure out how to update currentCard??
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  // console.log('in gen', round.currentCard)
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
 
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = takeTurn(id, round);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {
  // console.log('1inmain', round.deck[0])
  const currentRound = await getRound(round);
  // console.log('currentRound', currentRound.currentCard, currentRound.deck[0])
  console.log('currentROund', currentRound)
  // console.log(currentRound.turns, currentRound.currentCard.id)
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));
// console.log(getAnswer, 'in main', round.turns)
// console.log('correct:', round.currentCard.correctAnswer)
    if(!round.currentCard) {
      endRound(round);
    } else {
      main(round);
    }
}

module.exports.main = main;