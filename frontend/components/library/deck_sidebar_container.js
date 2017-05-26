import { connect } from 'react-redux';

import { allDecks } from '../../selectors/deck_selectors';
import DeckSidebar from './deck_sidebar';

const mapStateToProps = (state) => ({
  decks: allDecks(state)
});

export default connect(
  mapStateToProps,
  null
)(DeckSidebar);
