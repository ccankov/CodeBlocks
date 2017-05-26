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
  let deck = state.decks[deckId];

  if (deckId && deck) {
    let { concepts, languages } = deck;
    let publicDeck = deck.public;
    let blocks = filteredBlocks(state, languages, concepts, !publicDeck);
    return {
      blocks,
      deck,
      concepts: allConcepts(state),
      languages: allLanguages(state),
      conceptsObj: state.concepts,
      languagesObj: state.languages
    };
  } else {
    let blocks = libraryBlocks(state);
    return {
      blocks,
      deck: null,
      concepts: allConcepts(state),
      languages: allLanguages(state),
      conceptsObj: state.concepts,
      languagesObj: state.languages
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
