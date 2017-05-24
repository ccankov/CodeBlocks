import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let email = '';
    let libaryLink = '';
    if (this.props.currentUser) {
      email = this.props.currentUser.email;
      libaryLink = (
        <li>
          <Link to={'/library'} >My Library</Link>
        </li>
      );
    }
    return (
      <nav className="navbar">
        <menu className="row">
          <Link to="/">
            <i className="fa fa-cubes" aria-hidden="true"></i>
            <p className="logo">
              <strong className="logo-strong">Code</strong><small>Blocks</small>
            </p>
          </Link>
          <ul className="row">
            { libaryLink }
            <li>
              <a target="_blank"
                href="https://www.linkedin.com/in/cvetomir-chris-cankov/">
                About
              </a>
            </li>
            <li>
              <a target="_blank"
                href="mailto:cankov.chris@gmail.com">Contact</a>
            </li>
          </ul>
        </menu>
        <menu>
          <Switch>
            <Route exact path="/">
              <div className="row">
                <a onClick={ this.handleLoginClick }>Log In</a>
                <button onClick={ this.handleGuestLogin }>Get Started</button>
              </div>
            </Route>
            <Route>
              <div className="row">
                <ul><li><p>{ email }</p></li></ul>
                <button onClick={ this.handleLogout }>Log Out</button>
              </div>
            </Route>
          </Switch>
        </menu>
      </nav>
    );
  }
}
export default Navbar;
