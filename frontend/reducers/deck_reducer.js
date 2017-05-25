import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK }
  from '../actions/deck_actions';
import { merge } from 'lodash';

const deckReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DECKS:
      return merge({}, action.decks);
    case RECEIVE_DECK:
      newState[action.deck.id] = action.deck;
      return newState;
    case REMOVE_DECK:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default deckReducer;
