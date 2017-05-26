export const allDecks = (state) => {
  let deckIds = Object.keys(state.decks);
  return deckIds.map(deckId => state.decks[deckId]);
};
