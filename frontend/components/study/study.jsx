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
        <section className="row sidebar-gauge">
          <svg viewBox="0 0 100 100" width="80%">
            <circle r="45%" cx="50" cy="50" fill="none"
              stroke="#6E3667"
            ></circle>
            <circle r="45%" cx="50" cy="50" fill="none"
              className="stroke" style={{strokeDasharray: "100 300"}}
            ></circle>
          </svg>
          <div className="col floating-text">
            <p className="big-text">16<span>%</span></p>
            <p className="small-text">Mastered</p>
          </div>
        </section>
        <section className="row sidebar-bar hero">
          <p>
            <i className="fa fa-star" aria-hidden="true"></i><i>Master</i>
          </p>
          <div className="progress-back">
            <div className="progess-fill" style={{width: "50%"}}></div>
          </div>
        </section>
        <hr className="sidebar-divider" />
        <section className="col sidebar-bars">
          <section className="row sidebar-bar">
            <p>
              <i>Unanswered</i>
            </p>
            <div className="progress-back">
              <div className="progess-fill" style={{width: "15%"}}></div>
            </div>
          </section>
          <section className="row sidebar-bar">
            <p>
              <i>Novice</i>
            </p>
            <div className="progress-back">
              <div className="progess-fill" style={{width: "5%"}}></div>
            </div>
          </section>
          <section className="row sidebar-bar">
            <p>
              <i>Intermediate</i>
            </p>
            <div className="progress-back">
              <div className="progess-fill" style={{width: "30%"}}></div>
            </div>
          </section>
          <section className="row sidebar-bar">
            <p>
              <i>Master</i>
            </p>
            <div className="progress-back">
              <div className="progess-fill" style={{width: "50%"}}></div>
            </div>
          </section>
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
