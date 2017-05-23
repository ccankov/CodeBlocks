import React from 'react';
import { Link } from 'react-router-dom';

class DeckSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="col deck-sidebar">
        <p>Decks</p>
        <section className="deck-sidebar-list">

        </section>
      </aside>
    );
  }
}

export default DeckSidebar;
