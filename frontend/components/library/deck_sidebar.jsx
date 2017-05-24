import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DeckSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateBlock = this.handleCreateBlock.bind(this);
  }

  handleCreateBlock(e) {
    e.preventDefault();
    this.props.history.push('/library/blocks/new');
  }

  render() {
    return (
      <aside className="col deck-sidebar">
        <p className="row">
          <button onClick={this.handleCreateBlock} className="row">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Create Block
          </button>
        </p>
        <p>Decks</p>
        <section className="deck-sidebar-list">

        </section>
      </aside>
    );
  }
}

export default withRouter(DeckSidebar);
