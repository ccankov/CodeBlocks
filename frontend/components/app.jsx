import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { receiveModal } from '../actions/modal_actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.receiveModal("LOGIN_MODAL");
  }

  handleSignupClick(e) {
    e.preventDefault();
    this.props.receiveModal("SIGNUP_MODAL");
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleLoginClick }>Log In</button>
        <button onClick={ this.handleLogout }>Log Out</button>
        <button onClick={ this.handleSignupClick }>Sign Up</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveModal: (modalType) => dispatch(receiveModal(modalType))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
