import { combineReducers } from 'redux';

import errorReducer from './error_reducer';
import modalReducer from './modal_reducer';
import sessionReducer from './session_reducer';
import conceptReducer from './concept_reducer';
import languageReducer from './language_reducer';
import blockReducer from './block_reducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  currentModal: modalReducer,
  session: sessionReducer,
  concepts: conceptReducer,
  languages: languageReducer,
  blocks: blockReducer
});

export default rootReducer;
