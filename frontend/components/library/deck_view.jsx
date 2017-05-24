import React from 'react';
import Slider from 'react-slick';

import BlockCard from '../study/block_card';

class DeckView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockIdx: 0
    };

    this.handleCreateBlock = this.handleCreateBlock.bind(this);
  }

  handleCreateBlock(e) {
    e.preventDefault();
    this.props.history.push('/library/blocks/new');
  }

  render() {
    let block = this.props.blocks[this.state.blockIdx];
    if (!block) {
      return (<div></div>);
    }
    let blockCard = (
      <BlockCard
        key={block.id}
        block={block}
        showSolution={true}
        showProblem={false} />
    );
    return (
      <section className="col deck-view-main">
        <header className="row deck-header">
          <h2 className="heading deck-heading">My Library</h2>
          <button onClick={this.handleCreateBlock} className="row">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Add Block
          </button>
        </header>
        <section className="deck-info"></section>
        <section className="row deck-preview">
          <article className="deck-stats">

          </article>
          <article className="row card-nav align-center">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </article>
          <article className="deck-card">
            { blockCard }
          </article>
          <article className="row card-nav align-center">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </article>
        </section>
        <nav className="row deck-buttons">
          <button>Study</button>
        </nav>
      </section>
    );
  }
}

export default DeckView;
