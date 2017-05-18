import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <footer className="nav-footer">
    <menu className="row">
      <ul className="row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cvetomir-chris-cankov/">
            About
          </a>
        </li>
        <li><a href="mailto:cankov.chris@gmail.com">Contact</a></li>
      </ul>
    </menu>
    <menu>
      <p className="row">
        <small>
          CodeBlocks is a study platform that allows you to transcribe code
          blocks into flashcards.<br />© 2017 Cvetomir Cankov
        </small>
      </p>
    </menu>
  </footer>
);

export default Footer;
