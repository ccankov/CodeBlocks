import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBlocks, deleteBlock } from '../../actions/block_actions';
import { libraryBlocks } from '../../selectors/block_selectors';
import DeckView from './deck_view';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.history);

  return {
    blocks: libraryBlocks(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBlocks: (userId, langIds, conceptIds) => (
    dispatch(fetchBlocks(userId, langIds, conceptIds))
  ),
  deleteBlock: (id) => dispatch(deleteBlock(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView));
