import { combineReducers } from 'redux';

import errorReducer from './error_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  session: sessionReducer
});

export default rootReducer;
