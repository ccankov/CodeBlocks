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

  if (deckId) {
    let deck = state.decks[deckId];
    if (!deck) { ownProps.history.push('/study'); }
    let { concepts, languages } = deck;
    let publicDeck = deck.public;
    return {
      blocks: filteredBlocks(state, languages, concepts, !publicDeck),
      blockQueues: blockQueues(
        filteredBlocks(state, languages, concepts, !publicDeck)
      ),
      deck: deck,
      conceptsByName: conceptsByName(state),
      languagesByName: languagesByName(state)
    };
  } else {
    return {
      blocks: libraryBlocks(state),
      blockQueues: blockQueues(libraryBlocks(state)),
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
  createUserblock: (block) => dispatch(createUserblock(block))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
