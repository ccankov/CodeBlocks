import { RECEIVE_LANGUAGES, RECEIVE_LANGUAGE, REMOVE_LANGUAGE }
  from '../actions/language_actions';
import { merge } from 'lodash';

const languageReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LANGUAGES:
      return action.languages;
    case RECEIVE_LANGUAGE:
      newState[action.language.id] = action.language;
      return newState;
    case REMOVE_LANGUAGE:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default languageReducer;
