import React from 'react';

import Sidebar from './sidebar';
import Block from './block';

const Study = ({ blocks, blockQueues, createUserblock }) => (
  <main className="col study">
    <Sidebar blocks={ blocks } />
    <Block blocks={ blockQueues } createUserblock={ createUserblock } />
  </main>
);

export default Study;
