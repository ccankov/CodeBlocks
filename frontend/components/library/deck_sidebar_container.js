import { connect } from 'react-redux';

import { allDecks } from '../../selectors/deck_selectors';
import { deleteDeck } from '../../actions/deck_actions';
import DeckSidebar from './deck_sidebar';

const mapStateToProps = (state) => ({
  decks: allDecks(state)
});

const mapDispatchToProps = (dispatch) => ({
  deleteDeck: (id) => dispatch(deleteDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckSidebar);
