import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { hideModal } from '../../actions/modal_actions';
import LoginModal from './login_modal';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
