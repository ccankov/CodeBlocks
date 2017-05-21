import { connect } from 'react-redux';

import { blockQueues } from '../../selectors/block_selectors';
import { createUserblock } from '../../actions/block_actions';
import Block from './block';

const mapStateToProps = (state) => ({
  blocks: blockQueues(state)
});

const mapDispatchToProps = (dispatch) => ({
  createUserblock: (block) => dispatch(createUserblock(block))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);
