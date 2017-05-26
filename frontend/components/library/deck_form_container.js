import { connect } from 'react-redux';

import { fetchBlocks } from '../../actions/block_actions';
import { createDeck } from '../../actions/deck_actions';
import { allConcepts, conceptsByName } from '../../selectors/concept_selectors';
import { allLanguages, languagesByName }
  from '../../selectors/language_selectors';
import DeckForm from './deck_form';

const mapStateToProps = (state) => ({
  state,
  concepts: allConcepts(state),
  languages: allLanguages(state),
  conceptsByName: conceptsByName(state),
  languagesByName: languagesByName(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlocks: (userId, langIds, conceptIds) => (
    dispatch(fetchBlocks(userId, langIds, conceptIds))
  ),
  createDeck: (deck, languages, concepts) => dispatch(
    createDeck(deck, languages, concepts)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
