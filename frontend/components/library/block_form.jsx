import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const _nullBlock = {
  prompt: '',
  public: false,
  language: {
    id: 0,
    name: ''
  },
  output: '',
  codeblock: null,
  concepts: []
};

class BlockForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _nullBlock;
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleConceptDelete = this.handleConceptDelete.bind(this);
    this.handleConceptAdd = this.handleConceptAdd.bind(this);
  }

  handleUpdate(property) {
    if (property === 'language') {
      return (e => {
        let langId = parseInt(e.target.value);
        e.preventDefault();
        this.setState({ language: {
          id: langId,
          name: this.props.languageObj[langId].name
        }});
      });
    } else {
      return (e => {
        this.setState({ [property]: e.target.value});
      });
    }
  }

  handleConceptDelete(idx) {
    let concepts = this.state.concepts;
    concepts.splice(idx,1);
    this.setState({ concepts });
  }

  handleConceptAdd(concept) {
    let concepts = this.state.concepts;
    concepts.push({
        id: concepts.length + 1,
        text: concept
    });
    this.setState({ concepts });
  }

  render() {
    let languageOptions = this.props.languages.map(language => (
      <option
        key={language.id}
        value={ language.id }
        className="capital">
        { language.name.charAt(0).toUpperCase() + language.name.slice(1) }
      </option>
    ));
    return (
      <form className="col block-form">
        <h2 className="heading">Create a Block</h2>
        <section className="row input-container">
          <label className="floating-label">
            Step 1: Specify the programming language of your block
          </label>
          <select
            value={ this.state.language.id }
            onChange={ this.handleUpdate('language') }>
            { languageOptions }
          </select>
        </section>
        <section className="row input-container">
          <label className="floating-label">
            Step 2: Tag your code block with relevant concepts
          </label>
          <ReactTags tags={ this.state.concepts }
            placeholder="Add a concept"
            suggestions={ this.props.concepts }
            handleDelete={ this.handleConceptDelete }
            handleAddition={ this.handleConceptAdd }
            classNames={{
              suggestions: 'tag-suggestions',
              selected: 'row tags-input',
              tag: 'label bw',
              remove: 'tag-remove',
              activeSuggestion: 'tag-suggestion-active'
            }} />
        </section>
        <section className="row input-container">
          <label className="floating-label">
            Step 3: Type the prompt or objective of your code block
          </label>
          <input
            value={ this.state.prompt }
            placeholder="Objective"
            onChange={ this.handleUpdate('prompt') }></input>
        </section>
        <section className="row input-container">
          <label className="floating-label">
            Step 4: Copy and mark up your code block
          </label>
        </section>
        <section className="row input-container">
          <label className="floating-label">
            Step 5: (Optional) Specify the expected output of the code block
          </label>
          <input
            value={ this.state.output }
            placeholder="Output"
            onChange={ this.handleUpdate('output') }></input>
        </section>
        <button className="create-block">Create Block</button>
      </form>
    );
  }
}

export default BlockForm;
