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

    if (props.deck && props.deck.public) {
      let { concepts, languages } = props.deck;
      concepts = concepts.map(concept => props.conceptsByName[concept].id);
      languages = languages.map(language => props.languagesByName[language].id);

      props.fetchBlocks(null, languages, concepts);
    }

    this.state = {
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
  }

  componentDidMount() {
    let newState = aggregateBlocks(this.props.blocks);
    this.setState(newState);
  }

  componentWillReceiveProps(nextProps) {
    let newState = aggregateBlocks(nextProps.blocks);
    if (nextProps.deck && nextProps.deck.public && (!this.props.deck || !this.props.deck.public)) {
      let { concepts, languages } = nextProps.deck;
      concepts = concepts.map(concept => nextProps.conceptsByName[concept].id);
      languages = languages.map(
        language => nextProps.languagesByName[language].id
      );

      nextProps.fetchBlocks(null, languages, concepts);
    }
    this.setState(newState);
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
    if (!block) {
      block = _nullBlock;
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
        <p className="deck-text">
          Explore your entire collection of blocks, including their programming
          languages and concepts.
        </p>
        <section className="row deck-info">
          <article className="info-panel">
            <h3>Languages</h3>
            <ReactTags tags={ this.state.languageTags }
              readOnly={true}
              suggestions={ this.props.languages }
              handleDelete={ this.handleLanguageDelete }
              handleAddition={ this.handleLanguageAdd }
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
              suggestions={ this.props.concepts }
              handleDelete={ this.handleConceptDelete }
              handleAddition={ this.handleConceptAdd }
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
