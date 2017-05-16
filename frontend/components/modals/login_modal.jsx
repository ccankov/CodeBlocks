import React from 'react';

const _nullUser = {
  id: null,
  email: '',
  password: ''
};

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = _nullUser;

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
      <form onSubmit={ this.handleSubmit }>
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
        <button disabled={ !this.submitReady() } >Log In</button>
      </form>
    );
  }
}

export default LoginModal;
