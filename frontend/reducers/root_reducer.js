import { combineReducers } from 'redux';

import errorReducer from './error_reducer';
import modalReducer from './modal_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  modals: modalReducer,
  session: sessionReducer
});

export default rootReducer;
