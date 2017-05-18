import React from 'react';

import NavbarContainer from '../navigation/navbar_container';
import HomeActionsContainer from './home_actions_container';
import GuestLoginContainer from './guest_login_container';
import Footer from '../home/footer';

const Home = (props) => (
  <section>
    <NavbarContainer />
    <main>
      <article className="home-article article-1">
        <h1 className="article-title">Transform Code Into Flashcards</h1>
        <HomeActionsContainer />
        <div className="scrolldown-container">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </article>
      <article className="home-article article-2">
        <section className="row">
          <article className="transparent text-container"></article>
          <article className="text-container">
            <h2 className="dark-heading">Never Forget a Concept</h2>
            <p>By transcribing textbook code into interactive flashcards,
            CodeBlocks allows you to quickly review and master
            programming topics.</p>
          <GuestLoginContainer />
          </article>
        </section>
      </article>
      <article className="home-article article-3">
        <hr className="hr-bold"></hr>
      </article>
      <article className="home-article article-4">
        <div className="col">
          <h2>Features</h2>
          <section className="row">
            <article className="text-container">
              <ul>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Transcribe textbook code into flashcard-like CodeBlocks
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Study your CodeBlocks to review and perfect programming
                    concepts
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Organize your CodeBlocks by language and topic
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Create CodeBlocks for any programming language,
                    even CLIs and DSLs
                  </p>
                </li>
              </ul>
            </article>
            <article className="text-container">
              <ul>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Share your personalized CodeBlocks with others
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Explore and study CodeBlocks created by other users
                  for many programming languages
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Create and rate customized CodeBlock Decks
                  </p>
                </li>
                <li className="row">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <p>
                  Compete with others and showcase your software development
                  talent
                  </p>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </article>
    </main>
    <Footer />
  </section>
);

export default Home;
