import React from 'react';

const _nullUser = {
  id: null,
  email: '',
  password: '',
  confirmPassword: ''
};

class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = _nullUser;

    this.switchModal = this.switchModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let hideModal = this.props.hideModal;
    if (this.state.confirmPassword === this.state.password) {
      this.props.signup(this.state).then(
        () => hideModal()
      );
    }
  }

  switchModal(e) {
    this.props.receiveModal("LOGIN_MODAL");
  }

  submitReady() {
    if (this.state.email.length > 0 && this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword)
    {
      return true;
    }
    return false;
  }

  handleUpdate(property) {
    return (e => this.setState({ [property]: e.target.value }));
  }

  render() {
    let errorLis = this.props.errors.map((error, idx) => (
      <li key={idx} className="error-text">{error}</li>
    ));
    let passwordMatchError = null;
    if (this.state.confirmPassword.length > 0 &&
      this.state.confirmPassword !== this.state.password)
    {
      passwordMatchError = 'Passwords do not match';
    }
    return (
      <form>
        <ul>
          { errorLis }
        </ul>
        <input
          type="text"
          onChange={ this.handleUpdate("email") }
          value={ this.state.email }
          placeholder="Email Address"
        ></input>
        <br />
        <input
          type="password"
          onChange={ this.handleUpdate("password") }
          value={ this.state.password }
          placeholder="Password"
        ></input>
        <input
          type="password"
          onChange={ this.handleUpdate("confirmPassword") }
          value={ this.state.confirmPassword }
          placeholder="Confirm Password"
        ></input>
        <p className="error-text">{ passwordMatchError }</p>
        <hr />
        <button
          onClick={ this.handleSubmit }
          className={ !this.submitReady() ? 'disabled' : '' }
        >Sign Up</button>
        <a onClick={ this.switchModal }>
          <small>Already signed up? Log in instead.</small>
        </a>
      </form>
    );
  }
}

export default SignupModal;
