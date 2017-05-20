import React from 'react';

import SidebarContainer from './sidebar_container';

const Study = (props) => (
  <main className="col study">
    <SidebarContainer />
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
