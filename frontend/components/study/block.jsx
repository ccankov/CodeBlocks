import React from 'react';

import BlockCard from './block_card';

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.determineStateFromProps(props);

    this.handleReveal = this.handleReveal.bind(this);
    this.updateBlockLevel = this.updateBlockLevel.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(this.determineStateFromProps(newProps));
  }

  updateBlockLevel(offset) {
    let blockId = this.state.currentBlock ? this.state.currentBlock.id : null;
    let level = this.state.currentBlock ? this.state.currentBlock.level : 0;
    if (!level) { level = 0; }
    if (this.state.currentBlock) {
      switch (offset) {
        case 1:
        if (!this.state.currentBlock.max_level ||
          level < this.state.currentBlock.max_level) { level++; }
        break;
        case -1:
        if (level > 0) { level--; }
        break;
      }
    }
    return e => this.props.createUserblock({ level, block_id: blockId });
  }

  determineStateFromProps(props) {
    let { unanswered, master, intermediate, novice } = props.blocks;
    let totalQueue = unanswered.concat(novice, intermediate, master);
    return {
      currentBlock: totalQueue[0],
      showSolution: false
    };
  }

  handleReveal() {
    this.setState({ showSolution: true });
  }

  render() {
    let { unanswered, master, intermediate, novice } = this.props.blocks;
    let totalCards = unanswered.length + master.length +
      intermediate.length + novice.length;
    let revealButton = (
      <menu className="row study-buttons">
        <div className="study-button accent-text study-heading center good-text"
          onClick={ this.handleReveal }
        >
          Reveal Solution
        </div>
      </menu>
    );
    let solutionButtons = (
      <menu className="row study-buttons">
        <div className="study-button error-text one-third study-heading center"
             onClick={ this.updateBlockLevel(-1) }
        >
          Incorrect
        </div>
        <div className="study-button neutral-text one-third study-heading center"
             onClick={ this.updateBlockLevel(0) }
        >
          Partially correct
        </div>
        <div className="study-button good-text one-third study-heading center"
             onClick={ this.updateBlockLevel(1) }
        >
          Completely correct
        </div>
      </menu>
    );
    let card = this.state.currentBlock ? (
      <BlockCard
        block={this.state.currentBlock}
        showSolution={this.state.showSolution} />
    ) : '';
    return (
      <section className="col study-main">
        <div className="study-text right">
          <small>Total cards: { totalCards }</small>
        </div>
        { card }
        <div className="study-text center-bottom">
          <small>
            { this.state.showSolution ? 'How correct was your solution?' : '' }
          </small>
        </div>
        { this.state.showSolution ? solutionButtons : revealButton }
      </section>
    );
  }
}

export default Block;
