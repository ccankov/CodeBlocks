import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = (currentUser = {}) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const login = user => dispatch => (
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

const signup = user => dispatch => (
  APIUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
