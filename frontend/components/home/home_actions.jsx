import React from 'react';
import { withRouter } from 'react-router-dom';

class HomeActions extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
    this.handleStudy = this.handleStudy.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.receiveModal("SIGNUP_MODAL");
  }

  handleStudy(e) {
    e.preventDefault();
    this.props.login().then(
      () => this.props.history.push('/study')
    );
  }

  render() {
    return (
      <div className='col home-actions'>
        <p>
          <strong>Popular Languages:</strong> JavaScript, Ruby
        </p>
        <p>
          <strong>Popular Concepts:</strong> Syntax, Closure, Inheritance
        </p>
        <div className='row'>
          <button onClick={ this.handleSignup }>Create My CodeBlocks</button>
          <button onClick={ this.handleStudy }>Study Now</button>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeActions);
