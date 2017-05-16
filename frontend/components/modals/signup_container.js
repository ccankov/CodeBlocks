import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';
import SignupModal from './signup_modal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  null,
  mapDispatchToProps
)(SignupModal);
