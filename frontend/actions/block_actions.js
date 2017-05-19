import * as APIBlockUtil from '../util/block_api_util';
import * as APIUserblockUtil from '../util/userblock_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_BLOCKS = 'RECEIVE_BLOCKS';
export const RECEIVE_BLOCK = 'RECEIVE_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';

export const receiveBlocks = (blocks) => ({
  type: RECEIVE_BLOCKS,
  blocks
});

export const receiveBlock = (block) => ({
  type: RECEIVE_BLOCK,
  block
});

export const removeBlock = (id) => ({
  type: REMOVE_BLOCK,
  id
});

export const fetchBlocks = (userId, langIds, conceptIds) => dispatch => (
  APIBlockUtil.fetchBlocks(userId, langIds, conceptIds).then(
    blocks => dispatch(receiveBlocks(blocks)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchUserblocks = () => dispatch => (
  APIUserblockUtil.fetchUserblocks().then(
    blocks => dispatch(receiveBlocks(blocks)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createBlock = (block, concepts) => dispatch => (
  APIBlockUtil.createBlock(block, concepts).then(
    newBlock => dispatch(receiveBlock(newBlock)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createUserblock = (block) => dispatch => (
  APIUserblockUtil.createUserblock(block).then(
    newBlock => dispatch(receiveBlock(newBlock)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteBlock = (id) => dispatch => (
  APIBlockUtil.deleteBlock(id).then(
    deletedBlock => dispatch(removeBlock(deletedBlock.id)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
