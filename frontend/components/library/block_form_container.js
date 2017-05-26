import { connect } from 'react-redux';

import BlockForm from './block_form';
import { allConcepts } from '../../selectors/concept_selectors';
import { allLanguages } from '../../selectors/language_selectors';
import { createBlock } from '../../actions/block_actions';
import { fetchConcepts } from '../../actions/concept_actions';

const mapStateToProps = (state) => ({
  concepts: allConcepts(state),
  languages: allLanguages(state),
  languageObj: state.languages
});

const mapDispatchToProps = (dispatch) => ({
  createBlock: (block, concepts) => dispatch(createBlock(block, concepts)),
  fetchConcepts: () => dispatch(fetchConcepts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockForm);
