import React from 'react';

import ModalWrapper from './modal_wrapper';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';

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

export default ModalConductor;
