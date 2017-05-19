import React               from 'react';
import ReactDOM            from 'react-dom';

import Root                from './components/root';
import configureStore      from './store/store';
import { fetchLanguages }  from './actions/language_actions';
import { fetchConcepts }   from './actions/concept_actions';
import { fetchUserblocks } from './actions/block_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    store.dispatch(fetchUserblocks());
  } else {
    store = configureStore();
  }
  store.dispatch(fetchLanguages());
  store.dispatch(fetchConcepts());
  ReactDOM.render(
    <Root store={ store } />,
    document.getElementById('codeblocks')
  );
});
