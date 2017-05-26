import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DeckSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddDeck = this.handleAddDeck.bind(this);
    this.navigateLibrary = this.navigateLibrary.bind(this);
    this.navigateDeck = this.navigateDeck.bind(this);
    this.handleDeleteDeck = this.handleDeleteDeck.bind(this);
  }

  handleAddDeck(e) {
    e.preventDefault();
    this.props.history.push('/library/decks/new');
  }

  handleDeleteDeck(id) {
    return (e => {
      e.preventDefault();
      this.props.deleteDeck(id);
    });
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
        <div
          className="row deck-button"
          onClick={this.navigateDeck(deck.id)}>{ deck.name }
          <button onClick={ this.handleDeleteDeck(deck.id) }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
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
            <div
              className="row deck-button"
              onClick={this.navigateLibrary}>My Library</div>
          </div>
          { deckButtons }
        </section>
      </aside>
    );
  }
}

export default withRouter(DeckSidebar);
