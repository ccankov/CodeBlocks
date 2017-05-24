import { connect } from 'react-redux';

import { libraryBlocks } from '../../selectors/block_selectors';
import DeckView from './deck_view';

const mapStateToProps = (state) => ({
  blocks: libraryBlocks(state)
});

export default connect(
  mapStateToProps,
  null
)(DeckView);
