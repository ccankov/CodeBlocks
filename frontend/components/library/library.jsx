import React from 'react';

import NavbarContainer from '../navigation/navbar_container';
import DeckSidebarContainer from './deck_sidebar_container';
import Main from './main';

const Library = (props) => (
  <section>
    <NavbarContainer />
    <main className="row home-view">
      <DeckSidebarContainer />
      <Main />
    </main>
  </section>
);

export default Library;
