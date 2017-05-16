import { RECEIVE_ERRORS } from '../actions/error_actions';

const _nullState = [];

const errorReducer = (state = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return _nullState;
  }
};

export default errorReducer;
