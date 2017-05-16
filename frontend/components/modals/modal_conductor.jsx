import React from 'react';
import { connect } from 'react-redux';

import ModalWrapper from './modal_wrapper';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';
import { hideModal } from '../../actions/modal_actions';

const ModalConductor = ({ currentModal, hideModal }) => {
  switch (currentModal) {
    case 'LOGIN_MODAL':
      return (
        <ModalWrapper hideModal={ hideModal } title="Log In">
          <LoginContainer />
        </ModalWrapper>
      );
    case 'SIGNUP_MODAL':
      return (
        <ModalWrapper hideModal={ hideModal } title="Sign Up">
          <SignupContainer />
        </ModalWrapper>
      );
    default:
      return null;
  }
};

const mapStateToProps = ({ currentModal }) => ({
  currentModal
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalConductor);
