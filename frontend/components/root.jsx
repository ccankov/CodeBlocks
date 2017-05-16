import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import ModalConductor from './modals/modal_conductor';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <main>
        <App />
        <ModalConductor />
      </main>
    </HashRouter>
  </Provider>
);

export default Root;
