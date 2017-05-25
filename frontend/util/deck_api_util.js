export const createDeck = (deck, languages, concepts) => (
  $.ajax({
    method: 'POST',
    url: '/api/decks',
    data: { deck, languages, concepts }
  })
);

export const fetchDecks = () => (
  $.ajax({
    method: 'GET',
    url: `/api/decks`
  })
);

export const deleteDeck = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/decks/${id}`
  })
);
