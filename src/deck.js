const createDeck = (cards) => {
  return {
    deck: cards
  }
 }
 
 const countCards = (deck) => {
   return deck.deck.length;
 }

 module.exports = {
  createDeck,
  countCards
 }