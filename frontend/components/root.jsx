import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <main>
        <h1>App</h1>
        <h1>ModalConductor!</h1>
      </main>
    </HashRouter>
  </Provider>
);

export default Root;
