import * as APIDeckUtil from '../util/deck_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const receiveDecks = (decks) => ({
  type: RECEIVE_DECKS,
  decks
});

export const receiveDeck = (deck) => ({
  type: RECEIVE_DECK,
  deck
});

export const removeDeck = (id) => ({
  type: REMOVE_DECK,
  id
});

export const fetchDecks = () => dispatch => (
  APIDeckUtil.fetchDecks().then(
    decks => dispatch(receiveDecks(decks)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createDeck = (deck, concepts) => dispatch => (
  APIDeckUtil.createDeck(deck, concepts).then(
    newDeck => dispatch(receiveDeck(newDeck)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteDeck = (id) => dispatch => (
  APIDeckUtil.deleteDeck(id).then(
    deletedDeck => dispatch(removeDeck(deletedDeck.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
