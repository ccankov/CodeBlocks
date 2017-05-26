import React               from 'react';
import ReactDOM            from 'react-dom';

import Root                from './components/root';
import configureStore      from './store/store';
import { preloadAssets, preloadUserAssets }  from './util/preload_assets';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  var promises = [];
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    promises.push.apply(promises, preloadUserAssets(store));
  } else {
    store = configureStore();
  }
  promises.push.apply(promises, preloadAssets(store));
  Promise.all(promises).then(() => {
    window.currentUser = null;
    ReactDOM.render(
      <Root store={ store } />,
      document.getElementById('codeblocks')
    );
  });
});
