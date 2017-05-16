import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import ModalConductor from './modals/modal_conductor';
import { hideModal } from '../actions/modal_actions';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <main>
        <h1>App</h1>
        <ModalConductor
          currentModal={ store.currentModal }
          hideModal= { hideModal }
        />
      </main>
    </HashRouter>
  </Provider>
);

export default Root;
