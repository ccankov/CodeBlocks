import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './app';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modals/modal_container';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <section>
        <Switch>
          <Route exact path="/">
            <AuthRoute path="/" component={ App } />
          </Route>
          <Route exact path="/library">
            <ProtectedRoute path="/library" component={ App } />
          </Route>
          <Route exact path="/study">
            <ProtectedRoute path="/study" component={() => <h1>Study</h1>} />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <ModalContainer />
      </section>
    </HashRouter>
  </Provider>
);

export default Root;
