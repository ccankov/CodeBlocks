import { fetchLanguages }  from '../actions/language_actions';
import { fetchConcepts }   from '../actions/concept_actions';
import { fetchUserblocks } from '../actions/block_actions';
import { fetchBlocks }     from '../actions/block_actions';
import { fetchDecks }      from '../actions/deck_actions';

export const preloadAssets = (store) => {
  let promises = [];

  promises.push(store.dispatch(fetchLanguages()));
  promises.push(store.dispatch(fetchConcepts()));

  return promises;
};

export const preloadUserAssets = (store) => {
  let promises = [];

  promises.push(store.dispatch(fetchUserblocks()));
  promises.push(store.dispatch(fetchDecks()));
  promises.push(store.dispatch(fetchBlocks(window.currentUser.id)));

  return promises;
};
