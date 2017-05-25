import { connect } from 'react-redux';

import Study from './study';
import { libraryBlocks } from '../../selectors/block_selectors';
import { createUserblock } from '../../actions/block_actions';
import blockQueues from '../../util/queue_blocks';

const mapStateToProps = (state) => ({
  blocks: libraryBlocks(state),
  blockQueues: blockQueues(libraryBlocks(state))
});

const mapDispatchToProps = (dispatch) => ({
  createUserblock: (block) => dispatch(createUserblock(block))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
