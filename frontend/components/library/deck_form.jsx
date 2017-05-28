import React from 'react';
import { withRouter } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';

import aggregateBlocks from '../../util/aggregate_blocks';
import { filteredBlocks } from '../../selectors/block_selectors';
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

class DeckForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headingClass: '',
      blocks: [],
      deckName: '',
      personalDeck: true,
      blockIdx: 0,
      totalBlocks: 0,
      mastery: 0,
      languages: [],
      languageTags: [],
      curLangTags: [],
      concepts: [],
      conceptTags: [],
      curConceptTags: [],
      blockIds: [],
      unanswered: 0,
      novice: 0,
      intermediate: 0,
      master: 0
    };

    this.handleNextCard = this.handleNextCard.bind(this);
    this.handleUpdateDeckName = this.handleUpdateDeckName.bind(this);
    this.handleLanguageDelete = this.handleLanguageDelete.bind(this);
    this.handleLanguageAdd = this.handleLanguageAdd.bind(this);
    this.handleConceptDelete = this.handleConceptDelete.bind(this);
    this.handleConceptAdd = this.handleConceptAdd.bind(this);
    this.updateBlocks = this.updateBlocks.bind(this);
    this.handlePublicCards = this.handlePublicCards.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    let newState = aggregateBlocks(
      this.state.blocks,
      this.props.state.concepts,
      this.props.state.languages
    );
    this.setState(newState);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      blocks: filteredBlocks(
        nextProps.state,
        this.state.curLangTags.map(tag => this.props.languagesByName[tag.text].id),
        this.state.curConceptTags.map(tag => this.props.conceptsByName[tag.text].id),
        this.state.personalDeck
      )
    }, () => {
      let newState = aggregateBlocks(
        this.state.blocks,
        this.props.state.concepts,
        this.props.state.languages
      );
      newState.blockIdx = 0;
      this.setState(newState);
    });
  }

  updateBlocks() {
    let userId = this.state.personalDeck
      ? this.props.state.session.currentUser.id : null;
    let langs = this.state.curLangTags.length > 0
      ? this.state.curLangTags.map(lang => this.props.languagesByName[lang.text].id) : null;
    let concepts = this.state.curConceptTags.length > 0
    ? this.state.curConceptTags.map(concept => this.props.conceptsByName[concept.text].id) : null;
    this.props.fetchBlocks(userId, langs, concepts);
  }

  handleLanguageDelete (idx) {
    let curLangTags = this.state.curLangTags;
    curLangTags.splice(idx,1);
    this.setState({ curLangTags }, () => this.updateBlocks());
  }

  handleLanguageAdd (language) {
    let curLangTags = this.state.curLangTags;
    curLangTags.push({
        id: curLangTags.length + 1,
        text: language
    });
    this.setState({ curLangTags }, () => this.updateBlocks());
  }

  handleConceptDelete (idx) {
    let curConceptTags = this.state.curConceptTags;
    curConceptTags.splice(idx,1);
    this.setState({ curConceptTags }, () => this.updateBlocks());
  }

  handleConceptAdd (concept) {
    let curConceptTags = this.state.curConceptTags;
    curConceptTags.push({
        id: curConceptTags.length + 1,
        text: concept
    });
    this.setState({ curConceptTags }, () => this.updateBlocks());
  }

  handleNextCard(increment) {
    return (e => {
      let newIndex = this.state.blockIdx + increment;
      if (newIndex < 0) { newIndex += this.state.blocks.length; }
      if (newIndex >= this.state.blocks.length) {
        newIndex -= this.state.blocks.length;
      }
      if (this.state.blocks.length === 0) { newIndex = 0; }
      this.setState({ blockIdx: newIndex });
    });
  }

  handleUpdateDeckName(e) {
    this.setState({ deckName: e.target.value });
  }

  handlePublicCards(e) {
    this.setState({ personalDeck: !e.target.checked },
      () => this.updateBlocks());
  }

  handleSave(e) {
    e.preventDefault();
    if (this.state.deckName.length > 0) {
      this.props.createDeck({
        name: this.state.deckName,
        public: !this.state.personalDeck
      },
      this.state.curLangTags.map(tag => tag.text),
      this.state.curConceptTags.map(tag => tag.text)
      ).then(() => {
        this.props.fetchConcepts().then(() => (
          this.props.history.push('/library')
      ));
    });
    } else {
      this.setState({ headingClass: 'input-error' });
    }
  }

  render() {
    let block = this.state.blocks[this.state.blockIdx];
    if (!block) { block = _nullBlock; }
    let blockCard = (
      <BlockCard
        key={block.id}
        block={block}
        languages={this.props.state.languages}
        concepts={this.props.state.concepts}
        showSolution={true}
        showProblem={false} />
    );
    return (
      <section className="col deck-view-main">
        <header className="row deck-header">
          <h2 className="heading deck-heading">
            <input
              placeholder="Deck Name"
              className={this.state.headingClass}
              value={this.state.deckName}
              onChange={this.handleUpdateDeckName}></input>
          </h2>
          <div className="row">
            <p className="switch-label">Personal Blocks Only</p>
              <label className="switch">
                <input
                  type="checkbox"
                  value={!this.state.personalDeck}
                  onChange={this.handlePublicCards}
                ></input>
                <div className="slider round"></div>
              </label>
            <p className="switch-label">Include Public Blocks</p>
          </div>
        </header>
        <p className="deck-text">
          Add languages and concepts below to assemble your deck.
        </p>
        <section className="row deck-info">
          <article className="info-panel">
            <h3>Languages</h3>
            <ReactTags tags={ this.state.curLangTags }
              placeholder="Add language"
              suggestions={ this.props.languages.map(lang => lang.name) }
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
            <ReactTags tags={ this.state.curConceptTags }
              placeholder="Add concept"
              suggestions={ this.props.concepts.map(conc => conc.name) }
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
              <h3>{ `${this.state.blocks.length} Total Blocks` }</h3>
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
                { `${this.state.blockIdx + 1} of ${this.state.blocks.length}` }
              </p>
            </article>
          </article>
        </section>
        <nav className="row deck-buttons">
          <button onClick={this.handleSave}>Save</button>
        </nav>
      </section>
    );
  }
}

export default withRouter(DeckForm);
