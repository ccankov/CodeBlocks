import React from 'react';
import { withRouter } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import aggregateBlocks from '../../util/aggregate_blocks';
import BlockCard from '../study/block_card';

const _nullBlock = {
  prompt: "There are no blocks.",
  output: null,
  author: {},
  concepts: [],
  id: 0,
  language: {
    id: 0,
    name: 'javascript'
  },
  language_id: 1,
  codeblock: {
    allLines: [],
    editLines: [],
    editRanges: [],
    keywordLines: [],
    keywordRanges: []
  }
};

class DeckView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      blockIdx: 0,
      totalBlocks: 0,
      mastery: 0,
      languages: [],
      languageTags: [],
      concepts: [],
      conceptTags: [],
      blockIds: [],
      unanswered: 0,
      novice: 0,
      intermediate: 0,
      master: 0
    };

    this.handleCreateBlock = this.handleCreateBlock.bind(this);
    this.handleStudy = this.handleStudy.bind(this);
    this.handleNextCard = this.handleNextCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.determineStateFromProps = this.determineStateFromProps.bind(this);
  }

  componentWillMount() {
    if (this.props.deck && this.props.deck.public) {
      this.fetchData(this.props);
    }
  }

  fetchData(props) {
    this.setState({ loading: true }, () => {
      let { concepts, languages } = props.deck;
      props.fetchBlocks(null, languages, concepts).then(() => {
        this.setState({ loading: false });
      });
    });
  }

  determineStateFromProps(props) {
    let { blocks, conceptsObj, languagesObj } = props;
    let newState = aggregateBlocks(
      blocks,
      conceptsObj,
      languagesObj
    );
    this.setState(newState);
  }

  componentDidMount() {
    this.determineStateFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    let newDeck = nextProps.deck;
    let oldDeck = this.props.deck;
    if (
      (newDeck && newDeck.public && !oldDeck) ||
      (newDeck && newDeck.public && oldDeck && newDeck.id !== oldDeck.id)
    ) {
      this.fetchData(nextProps);
    }
    this.determineStateFromProps(nextProps);
  }

  handleCreateBlock(e) {
    e.preventDefault();
    this.props.history.push('/library/blocks/new');
  }

  handleStudy(e) {
    e.preventDefault();
    if (this.props.match.path === '/library') {
      this.props.history.push('/study');
    } else {
      this.props.history.push(`/study/${this.props.match.params.deckId}`);
    }
  }

  handleNextCard(increment) {
    return (e => {
      let newIndex = this.state.blockIdx + increment;
      if (newIndex < 0) { newIndex += this.props.blocks.length; }
      if (newIndex >= this.props.blocks.length) {
        newIndex -= this.props.blocks.length;
      }
      if (this.props.blocks.length === 0) { newIndex = 0; }
      this.setState({ blockIdx: newIndex });
    });
  }

  handleDeleteCard() {
    let block = this.props.blocks[this.state.blockIdx];
    this.props.deleteBlock(block.id);
  }

  render() {
    let block = this.props.blocks[this.state.blockIdx];
    if (this.state.loading || !block) {
      block = _nullBlock;
    }
    let blockCard = (
      <BlockCard
        key={block.id}
        block={block}
        concepts={this.props.conceptsObj}
        languages={this.props.languagesObj}
        showSolution={true}
        showProblem={false} />
    );
    let deckName = this.props.deck ? this.props.deck.name : 'My Library';
    return (
      <section className="col deck-view-main">
        <header className="row deck-header">
          <h2 className="heading deck-heading">{ deckName }</h2>
          <button onClick={this.handleCreateBlock} className="row">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Add Block
          </button>
        </header>
        <p className="deck-text">
          Explore your entire collection of blocks, including their programming
          languages and concepts.
        </p>
        <section className="row deck-info">
          <article className="info-panel">
            <h3>Languages</h3>
            <ReactTags tags={ this.state.languageTags }
              readOnly={true}
              suggestions={ this.props.languages.map(lang => lang.name) }
              classNames={{
                tags: 'label-tags',
                suggestions: 'tag-suggestions',
                selected: 'row tags-input',
                tag: 'label bw',
                remove: 'tag-remove',
                activeSuggestion: 'tag-suggestion-active'
              }} />
          </article>
          <article className="info-panel">
            <h3>Concepts</h3>
            <ReactTags tags={ this.state.conceptTags }
              readOnly={true}
              suggestions={ this.props.concepts.map(conc => conc.name) }
              classNames={{
                tags: 'label-tags',
                suggestions: 'tag-suggestions',
                selected: 'row tags-input',
                tag: 'label bw',
                remove: 'tag-remove',
                activeSuggestion: 'tag-suggestion-active'
              }} />
          </article>
        </section>
        <section className="row deck-preview">
          <article className="col deck-stats">
            <section className="row sidebar-gauge">
              <svg viewBox="0 0 100 100" width="80%">
                <circle r="45%" cx="50" cy="50" fill="none"
                  stroke="#6E3667"
                ></circle>
                <circle r="45%" cx="50" cy="50" fill="none"
                  className="stroke" style={{
                  strokeDasharray: (this.state.mastery * 2.83) + " 300"
                  }}
                ></circle>
              </svg>
              <div className="col floating-text">
              <p className="big-text">
                { isNaN(this.state.mastery) ? 0 : this.state.mastery }
                <strong>%</strong>
              </p>
              <p className="small-text">Mastered</p>
              </div>
            </section>
            <section className="library-stats">
              <h3>{ `${this.props.blocks.length} Total Cards` }</h3>
            </section>
          </article>
          <article className="deck-card-preview">
            <article className="row deck-card">
              <article className="row card-nav align-center"
                onClick={ this.handleNextCard(-1) }>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </article>
              { blockCard }
              <article className="row card-nav align-center"
                onClick={ this.handleNextCard(1) }>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </article>
            </article>
            <article className="row deck-card-info">
              <p>
                { `${this.state.blockIdx + 1} of ${this.props.blocks.length}` }
              </p>
              <button className="error" onClick={ this.handleDeleteCard }>
                Delete Card
              </button>
            </article>
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
