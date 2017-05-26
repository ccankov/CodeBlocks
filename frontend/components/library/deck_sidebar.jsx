import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DeckSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddDeck = this.handleAddDeck.bind(this);
    this.navigateLibrary = this.navigateLibrary.bind(this);
    this.navigateDeck = this.navigateDeck.bind(this);
  }

  handleAddDeck(e) {
    e.preventDefault();
    this.props.history.push('/library/decks/new');
  }

  navigateLibrary(e) {
    e.preventDefault();
    this.props.history.push('/library');
  }

  navigateDeck(id) {
    return (e => {
      e.preventDefault();
      this.props.history.push(`/library/${id}`);
    });
  }

  render() {
    let deckButtons = this.props.decks.map(deck => (
      <div className="deck-navigation" key={deck.id}>
        <button
          className="deck-button"
          onClick={this.navigateDeck(deck.id)}>{ deck.name }</button>
      </div>
    ));
    return (
      <aside className="col deck-sidebar">
        <p>Decks <button onClick={ this.handleAddDeck }>
          <i className="fa fa-plus" aria-hidden="true"></i>
          Add Deck</button>
        </p>
        <section className="deck-sidebar-list">
          <div className="deck-navigation">
            <button
              className="deck-button"
              onClick={this.navigateLibrary}>My Library</button>
          </div>
          { deckButtons }
        </section>
      </aside>
    );
  }
}

export default withRouter(DeckSidebar);
