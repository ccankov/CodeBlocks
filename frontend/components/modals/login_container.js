import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';
import LoginModal from './login_modal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
