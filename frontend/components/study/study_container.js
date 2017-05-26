import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { libraryBlocks, filteredBlocks } from '../../selectors/block_selectors';
import { createUserblock, fetchBlocks } from '../../actions/block_actions';
import { allConcepts, conceptsByName } from '../../selectors/concept_selectors';
import { allLanguages, languagesByName }
  from '../../selectors/language_selectors';
import blockQueues from '../../util/queue_blocks';
import Study from './study';

const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.match.params.deckId;
  let deck = state.decks[deckId];

  if (deckId && deck) {
    let { concepts, languages } = deck;
    let publicDeck = deck.public;
    let blocks = filteredBlocks(state, languages, concepts, !publicDeck);
    return {
      blocks,
      blockQueues: blockQueues(blocks),
      deck,
      concepts: state.concepts,
      languages: state.languages
    };
  } else {
    let blocks = libraryBlocks(state);
    return {
      blocks,
      blockQueues: blockQueues(blocks),
      deck: null,
      concepts: state.concepts,
      languages: state.languages
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchBlocks: (userId, langIds, conceptIds) => (
    dispatch(fetchBlocks(userId, langIds, conceptIds))
  ),
  createUserblock: (block) => dispatch(createUserblock(block))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
