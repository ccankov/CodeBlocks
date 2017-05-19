import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { receiveModal } from '../../actions/modal_actions';
import HomeActions from './home_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveModal: (modalType) => dispatch(receiveModal(modalType)),
  login: () => dispatch(login({
    id: null,
    email: 'guest@codeblocks.us',
    password: 'password'
  }))
});

export default connect(
  null,
  mapDispatchToProps
)(HomeActions);
