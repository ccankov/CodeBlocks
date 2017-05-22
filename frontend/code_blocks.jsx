import React               from 'react';
import ReactDOM            from 'react-dom';

import Root                from './components/root';
import configureStore      from './store/store';
import { fetchLanguages }  from './actions/language_actions';
import { fetchConcepts }   from './actions/concept_actions';
import { fetchUserblocks } from './actions/block_actions';
import { fetchBlocks }     from './actions/block_actions';

import * as BlockActions from './actions/block_actions';
window.BlockActions = BlockActions;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    store.dispatch(fetchUserblocks());
    store.dispatch(fetchBlocks(window.currentUser.id));
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
