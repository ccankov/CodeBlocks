import { RECEIVE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return action.modalType;
    default:
      return null;
  }
};

export default modalReducer;
