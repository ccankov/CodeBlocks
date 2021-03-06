import * as APIUtil        from '../util/session_api_util';
import { receiveErrors }   from './error_actions';
import { fetchUserblocks } from './block_actions';
import { fetchBlocks }     from './block_actions';
import { fetchDecks }      from './deck_actions';
import { receiveDecks }    from './deck_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (currentUser = null) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => {
  let thisUser = null;
  return APIUtil.login(user).then(
    currentUser => {
      thisUser = currentUser;
      dispatch(receiveCurrentUser(currentUser));
    },
    errors => dispatch(receiveErrors(errors.responseJSON))
  ).then(
    () => {
      dispatch(fetchUserblocks());
      dispatch(fetchBlocks(thisUser.id));
      dispatch(fetchDecks());
    }
  );
};

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  ).then(
    () => dispatch(receiveDecks({}))
  )
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
