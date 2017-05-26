import React               from 'react';
import ReactDOM            from 'react-dom';

import Root                from './components/root';
import configureStore      from './store/store';
import { fetchLanguages }  from './actions/language_actions';
import { fetchConcepts }   from './actions/concept_actions';
import { fetchUserblocks } from './actions/block_actions';
import { fetchBlocks }     from './actions/block_actions';
import { fetchDecks }      from './actions/deck_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    store.dispatch(fetchUserblocks());
    store.dispatch(fetchDecks());
    store.dispatch(fetchBlocks(window.currentUser.id));
  } else {
    store = configureStore();
  }
  store.dispatch(fetchLanguages()).then(() => {
    store.dispatch(fetchConcepts()).then(() => {
      ReactDOM.render(
        <Root store={ store } />,
        document.getElementById('codeblocks')
      );
    });
  });
});
