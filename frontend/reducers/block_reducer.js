import { RECEIVE_BLOCKS, RECEIVE_BLOCK, REMOVE_BLOCK }
  from '../actions/block_actions';
import { merge } from 'lodash';

const blockReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return merge(newState, action.blocks);
    case RECEIVE_BLOCK:
      newState[action.block.id] = action.block;
      return newState;
    case REMOVE_BLOCK:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default blockReducer;
