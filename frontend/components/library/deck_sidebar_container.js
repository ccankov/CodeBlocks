import { connect } from 'react-redux';

import DeckSidebar from './deck_sidebar';

const mapStateToProps = (state) => ({
  decks: null
});

export default connect(
  mapStateToProps,
  null
)(DeckSidebar);
