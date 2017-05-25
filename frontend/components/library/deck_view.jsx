import React from 'react';
import { withRouter } from 'react-router-dom';

import aggregateBlocks from '../../util/aggregate_blocks';
import BlockCard from '../study/block_card';

class DeckView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockIdx: 0,
      totalBlocks: 0,
      mastery: 0,
      languages: [],
      concepts: [],
      blockIds: [],
      unanswered: 0,
      novice: 0,
      intermediate: 0,
      master: 0
    };

    this.handleCreateBlock = this.handleCreateBlock.bind(this);
    this.handleStudy = this.handleStudy.bind(this);
    this.handleNextCard = this.handleNextCard.bind(this);
  }

  componentDidMount() {
    let newState = aggregateBlocks(this.props.blocks);
    this.setState(newState);
  }

  handleCreateBlock(e) {
    e.preventDefault();
    this.props.history.push('/library/blocks/new');
  }

  handleStudy(e) {
    e.preventDefault();
    this.props.history.push('/study');
  }

  handleNextCard(increment) {
    return (e => {
      let newIndex = this.state.blockIdx + increment;
      if (newIndex < 0) { newIndex += this.props.blocks.length; }
      if (newIndex >= this.props.blocks.length) {
        newIndex -= this.props.blocks.length;
      }
      this.setState({ blockIdx: newIndex });
    });
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
        <section className="row deck-info">
          <article className="info-panel">
            <h3>Languages</h3>
          </article>
          <article className="info-panel">
            <h3>Concepts</h3>
          </article>
        </section>
        <section className="row deck-preview">
          <article className="deck-stats">

          </article>
          <article className="row card-nav align-center"
            onClick={ this.handleNextCard(-1) }>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </article>
          <article className="deck-card">
            { blockCard }
          </article>
          <article className="row card-nav align-center"
            onClick={ this.handleNextCard(1) }>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </article>
        </section>
        <nav className="row deck-buttons">
          <button onClick={this.handleStudy}>Study</button>
        </nav>
      </section>
    );
  }
}

export default withRouter(DeckView);
