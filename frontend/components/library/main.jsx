import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BlockFormContainer from './block_form_container';
import DeckFormContainer from './deck_form_container';
import DeckViewContainer from './deck_view_container';

const Main = (props) => (
  <section className="library-main">
    <Switch>
      <Route
        exact path="/library/decks/new"
        component={ DeckFormContainer } />
      <Route
        exact path="/library/:deckId"
        component={ DeckViewContainer } />
      <Route
        exact path="/library/blocks/new"
        component={ BlockFormContainer } />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </section>
);

export default Main;
