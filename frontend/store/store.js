import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools }          from 'remote-redux-devtools';
import thunk                            from 'redux-thunk';

import rootReducer                      from '../reducers/root_reducer';

const composeEnhancers = composeWithDevTools({ realtime: true });
const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  )
);

export default configureStore;
