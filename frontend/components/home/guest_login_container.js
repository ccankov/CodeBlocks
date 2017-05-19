import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import GuestLogin from './guest_login';

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login({
    id: null,
    email: 'guest@codeblocks.us',
    password: 'password'
  }))
});

export default connect(
  null,
  mapDispatchToProps
)(GuestLogin);
