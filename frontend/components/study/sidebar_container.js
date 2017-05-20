import { connect } from 'react-redux';

import Sidebar from './sidebar';

const mapStateToProps = ({ blocks }) => ({
  blocks
});

export default connect(
  mapStateToProps,
  null
)(Sidebar);
