import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { receiveModal } from '../../actions/modal_actions';

import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(login({
    id: null,
    email: 'guest@codeblocks.us',
    password: 'imaguest'
  })),
  receiveModal: (modalType) => dispatch(receiveModal(modalType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
