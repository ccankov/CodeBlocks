import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { hideModal } from '../../actions/modal_actions';
import SignupModal from './signup_modal';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
