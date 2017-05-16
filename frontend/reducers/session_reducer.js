import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default sessionReducer;
