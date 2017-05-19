import React from 'react';

const Study = (props) => (
  <main className="col study">
    <aside className="col study-sidebar">
      <section className="sidebar-header">
        <button>
          <i className="fa fa-home" aria-hidden="true"></i>
        </button>
        <p><span>Studying:</span> My Collection</p>
      </section>
      <section className="sidebar-main">
        <section className="col sidebar-info">
          <section className="col info">
            <small>Languages:</small>
            <div className="row labels labelScroll">
              <div className="label">javascript</div>
              <div className="label">ruby</div>
            </div>
          </section>
          <hr />
          <section className="col info">
            <small>Topics:</small>
            <div className="row labels labelScroll">
              <div className="label">inheritance</div>
              <div className="label">prototypal inheritance</div>
              <div className="label">closure</div>
            </div>
          </section>
        </section>
        <section className="sidebar-gauge">

        </section>
        <section className="sidebar-herobar">

        </section>
        <section className="col sidebar-bars">
          <div className="sidebar-bar">
            <p className="sidebar-label">

            </p>
            <div className="sidebar-progress">

            </div>
          </div>
          <div className="sidebar-bar">
            <p className="sidebar-label">

            </p>
            <div className="sidebar-progress">

            </div>
          </div>
          <div className="sidebar-bar">
            <p className="sidebar-label">

            </p>
            <div className="sidebar-progress">

            </div>
          </div>
          <div className="sidebar-bar">
            <p className="sidebar-label">

            </p>
            <div className="sidebar-progress">

            </div>
          </div>
        </section>
      </section>
    </aside>
    <section className="col study-main">
      <div className="study-text right">
        <small>26 of 144</small>
      </div>
      <article className="study-block">

      </article>
      <div className="study-text center-bottom">
        <small>How correct was your solution?</small>
      </div>
      <menu className="row study-buttons">
        <div className="study-button three-fourths study-heading center">
          Reveal Solution
        </div>
        <div
          className="study-button one-fourth study-heading study-skip center"
        >
          Skip
        </div>
      </menu>
    </section>
  </main>
);

export default Study;
