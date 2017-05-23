import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DeckSidebarContainer from './deck_sidebar_container';
import BlockFormContainer from './block_form_container';

const Main = (props) => (
  <main className="row home-view">
    <DeckSidebarContainer />
    <section className="library-main">
      <Switch>
        <Route exact path="/library" render={() => <h1>Library</h1>} />
        <Route
          exact path="/library/blocks/new"
          component={ BlockFormContainer } />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </section>
  </main>
);

export default Main;