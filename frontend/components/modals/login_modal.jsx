import React from 'react';

const _nullUser = {
  id: null,
  email: '',
  password: ''
};

const _guestUser = {
  id: null,
  email: 'guest@codeblocks.us',
  password: 'imaguest'
};

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = _nullUser;

    this.switchModal = this.switchModal.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let hideModal = this.props.hideModal;
    this.props.login(this.state).then(
      () => hideModal()
    );
  }

  switchModal(e) {
    this.props.receiveModal("SIGNUP_MODAL");
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let hideModal = this.props.hideModal;
    this.props.login(_guestUser).then(
      () => hideModal()
    );
  }

  submitReady() {
    if (this.state.email.length > 0 && this.state.password.length > 5)
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
    return (
      <form>
        <ul>
          { errorLis }
        </ul>
        <input
          type="text"
          onChange={ this.handleUpdate("email") }
          value={ this.state.email }
          placeholder="you@email.com"
        ></input>
        <br />
        <input
          type="password"
          onChange={ this.handleUpdate("password") }
          value={ this.state.password }
          placeholder="password"
        ></input>
        <hr />
        <div className="row">
          <button
            className={ !this.submitReady() ? 'disabled' : '' }
            onClick={ this.handleSubmit } >Log In</button>
          <button type="button" onClick={ this.handleGuestLogin }>Guest</button>
        </div>
        <a onClick={ this.switchModal }>
          <small>New user? Sign up instead.</small>
        </a>
      </form>
    );
  }
}

export default LoginModal;
