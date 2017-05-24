import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { withRouter } from 'react-router-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/xcode';
import '../../util/selected_languages';

const _nullBlock = {
  prompt: '',
  public: false,
  language: {
    id: 1,
    name: 'javascript'
  },
  output: '',
  codeblock: {
    allLines: [],
    editLines: [],
    editRanges: []
  },
  code: '',
  concepts: [],
  editor: null,
  markerIds: []
};

class BlockForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _nullBlock;
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleConceptDelete = this.handleConceptDelete.bind(this);
    this.handleConceptAdd = this.handleConceptAdd.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.storeEditor = this.storeEditor.bind(this);
    this.setupEditor = this.setupEditor.bind(this);
    this.addEditLine = this.addEditLine.bind(this);
    this.removeEditLine = this.removeEditLine.bind(this);
    this.handleKeywordMark = this.handleKeywordMark.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  storeEditor(editor) {
    this.setState({ editor }, () => this.setupEditor(editor));
  }

  addEditLine(idx) {
    let { allLines, editLines, editRanges } = this.state.codeblock;
    let editLinesSet = new Set(editLines);
    editLinesSet.add(idx);
    this.setState({
      codeblock: {
        allLines,
        editLines: Array.from(editLinesSet),
        editRanges
      }
    });
  }

  removeEditLine(idx) {
    let { allLines, editLines, editRanges } = this.state.codeblock;
    let editLinesSet = new Set(editLines);
    editLinesSet.delete(idx);
    this.setState({
      codeblock: {
        allLines,
        editLines: Array.from(editLinesSet),
        editRanges
      }
    });
  }

  removeMarkers(editor) {
    let session = editor.getSession();
    this.state.markerIds.forEach(markerId => session.removeMarker(markerId));
  }

  handleKeywordMark(e) {
    e.preventDefault();
    let editor = this.state.editor;
    let range = editor.getSelection().getRange();
    let startRow = range.start.row;
    let startCol = range.start.column;
    let endRow = range.end.row;
    let endCol = range.end.column;
    if ((startRow === endRow) && (startCol === endCol)) {
      return;
    }
    let editRange = [startRow, startCol, endRow, endCol];
    let session = editor.getSession();
    let markerIds = this.state.markerIds;
    let markerId = session.addMarker(range, "keyword", "keyword", false);
    markerIds.push(markerId);
    let { allLines, editLines, editRanges } = this.state.codeblock;
    editRanges.push(editRange);
    this.setState({
      markerIds,
      codeblock: {
        allLines,
        editLines,
        editRanges
      }
    });
  }

  setupEditor(editor) {
    editor.on("guttermousedown", e => {
      var target = e.domEvent.target;
      if (target.className.indexOf("ace_gutter-cell") === -1)
          return;
      if (!editor.isFocused())
          return;
      if (e.clientX > 25 + target.getBoundingClientRect().left)
          return;
      var breakpoints = e.editor.session.getBreakpoints(row, 0);
      var row = e.getDocumentPosition().row;
      if(typeof breakpoints[row] === typeof undefined) {
        e.editor.session.setBreakpoint(row);
        this.addEditLine(row);
      }
      else {
        e.editor.session.clearBreakpoint(row);
        this.removeEditLine(row);
      }
      e.stop();
    });
  }

  handleCodeChange(newValue) {
    let oldEditLines = this.state.codeblock.editLines;
    this.removeMarkers(this.state.editor);
    this.setState({
      code: newValue,
      codeblock: {
        allLines: newValue.split('\n'),
        editLines: oldEditLines,
        editRanges: []
      },
      markerIds: []
    });
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
    } else if (property === 'public') {
      return (e => {
        this.setState({ public: e.target.checked });
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

  handleSubmit(e) {
    e.preventDefault();
    let conceptIds = Object.keys(this.state.concepts);
    let concepts = conceptIds.map(conceptId => (
      this.state.concepts[conceptId].text
    ));
    let block = {
      prompt: this.state.prompt,
      output: this.state.output.length > 0 ? this.state.output : null,
      codeblock: JSON.stringify(this.state.codeblock),
      public: this.state.public,
      language_id: this.state.language.id
    };
    this.props.createBlock(block, concepts).then(
      () => this.props.history.push('/library')
    );
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
      <form className="col block-form" onSubmit={ this.handleSubmit }>
        <h2 className="heading">Create a Block</h2>
        <section className="row input-container">
          <label className="floating-label">
            Step 1: Specify the programming language of your block
          </label>
          <figure className="row language-select">
            <select
              value={ this.state.language.id }
              onChange={ this.handleUpdate('language') }>
              { languageOptions }
            </select>
            <p>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </p>
          </figure>
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
        <section className="col input-container align-start">
          <label className="floating-label">
            Step 4: Copy and mark up your code block
          </label>
          <p>Identify key logic lines to study by clicking the gutter.
            Select keywords and use the button to mark them for studying.</p>
          <button className="slim-button" onClick={ this.handleKeywordMark }>
            Mark Keyword
          </button>
          <AceEditor
            mode={ this.state.language.name.length > 0
                    ? this.state.language.name : 'text' }
            theme="xcode"
            name="block"
            fontSize={16}
            highlightActiveLine={true}
            focus={false}
            onLoad={this.storeEditor}
            onChange={this.handleCodeChange}
            value={ this.state.code }
            style={{ width: "100%", height: "30vh" }}
            editorProps={{$blockScrolling: true}}
            />
        </section>
        <section className="row input-container align-start">
          <label className="floating-label">
            Step 5: (Optional) Specify the expected output of the code block
          </label>
          <input
            value={ this.state.output }
            placeholder="Output"
            onChange={ this.handleUpdate('output') }></input>
        </section>
        <section className="row input-container align-center">
          <label className="floating-label">
            Step 6: (Optional) Make your new block public to allow others to study it
          </label>
          <p className="switch-label">Private</p>
          <label className="switch">
            <input
              type="checkbox"
              value={this.state.public}
              onChange={this.handleUpdate('public')}></input>
            <div className="slider round"></div>
          </label>
          <p className="switch-label">Public</p>
        </section>
        <button className="create-block">Create Block</button>
      </form>
    );
  }
}

export default withRouter(BlockForm);
