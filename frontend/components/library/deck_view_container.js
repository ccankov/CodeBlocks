import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBlocks, deleteBlock } from '../../actions/block_actions';
import { libraryBlocks, filteredBlocks } from '../../selectors/block_selectors';
import { allConcepts, conceptsByName } from '../../selectors/concept_selectors';
import { allLanguages, languagesByName }
  from '../../selectors/language_selectors';
import DeckView from './deck_view';

const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;

  if (deckId) {
    let deck = state.decks[deckId];
    if (!deck) { ownProps.history.push('/library'); }
    let { concepts, languages } = deck;
    let publicDeck = deck.public;
    return {
      blocks: filteredBlocks(state, languages, concepts, !publicDeck),
      deck: deck,
      conceptsByName: conceptsByName(state),
      languagesByName: languagesByName(state)
    };
  } else {
    return {
      blocks: libraryBlocks(state),
      deck: null,
      conceptsByName: conceptsByName(state),
      languagesByName: languagesByName(state)
    };
  }
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
