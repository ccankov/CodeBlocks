import { RECEIVE_CONCEPTS, RECEIVE_CONCEPT, REMOVE_CONCEPT }
  from '../actions/concept_actions';
import { merge } from 'lodash';

const conceptReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CONCEPTS:
      return action.concepts;
    case RECEIVE_CONCEPT:
      newState[action.concept.id] = action.concept;
      return newState;
    case REMOVE_CONCEPT:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default conceptReducer;
