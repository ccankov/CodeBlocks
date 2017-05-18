import React from 'react';

const GuestLogin = ({ login }) => (
  <button onClick={ login }>
    <i className="fa fa-play-circle-o" aria-hidden="true"></i>
    <span>Get Started</span>
  </button>
);

export default GuestLogin;
