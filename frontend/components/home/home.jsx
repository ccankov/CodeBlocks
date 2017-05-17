import React from 'react';

import NavbarContainer from '../navigation/navbar_container';
import Footer from '../home/footer';

const Home = (props) => (
  <section>
    <NavbarContainer />
    <main>
      <article className="home-article article-1">
        <h1 className="article-title">The World's Smartest Flashcards</h1>
        <div className="scrolldown-container">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </article>
      <article className="home-article article-2">
        <section className="row">
          <article className="transparent text-container">

          </article>
          <article className="text-container">

          </article>
        </section>
      </article>
      <article className="home-article article-3">

      </article>
      <article className="home-article article-4">
        <div className="col">
          <h2>Features</h2>
          <section className="row">
            <article className="text-container">

            </article>
            <article className="text-container">

            </article>
          </section>
        </div>
      </article>
    </main>
    <Footer />
  </section>
);

export default Home;
