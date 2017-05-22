import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/xcode';
import '../../util/selected_languages';

class BlockProblem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
      markerIds: [],
      html: <div></div>
    };

    this.processProps = this.processProps.bind(this);
    this.editorLoad = this.editorLoad.bind(this);
    this.setupEditor = this.setupEditor.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
  }

  removeMarkers(editor, block, levelKeyword) {
    let session = editor.getSession();
    this.state.markerIds.forEach(markerId => session.removeMarker(markerId));
    this.setupEditor(editor, block, levelKeyword);
  }

  componentDidMount() {
    this.processProps(this.props);
  }

  processProps(props) {
    let block = props.block;
    let levels = [];
    if (block.output) { levels.push('all'); }
    if (block.codeblock.keywordLines) { levels.push('keyword'); }
    if (block.codeblock.logicLines) { levels.push('logic'); }
    let level = block.level ? block.level: 0;
    if (block.max_level && block.level === block.max_level) { level--; }
    let levelKeyword = levels[level];
    let language = block.language.name;
    let codeblock = block.codeblock[levelKeyword + 'Lines'].join('\n');
    let output = '';
    if (block.output) {
      output = (
        <section className="row output-row">
          <p className="output-label">
            OUTPUT
          </p>
          <p className="output">
            >
            <input defaultValue={ block.output }></input>
          </p>
        </section>
      );
    }
    this.setState({
      html: (
        <section className="col code-pane">
          <AceEditor
            mode={ block ? language : "text" }
            theme="xcode"
            name="block"
            fontSize={16}
            highlightActiveLine={false}
            focus={true}
            onLoad={this.editorLoad}
            style={{ width: "100%" }}
            value={ codeblock }
            editorProps={{$blockScrolling: true}}
            />
        { output }
        </section>
      )
    },() => {
      if (this.state.editor) {
        this.removeMarkers(this.state.editor, block, levelKeyword);
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.block && !newProps.showSolution) {
      this.processProps(newProps);
    }
  }

  editorLoad(editor) {
    this.setState({ editor });
  }

  setupEditor(editor, block, levelKeyword) {
    let ace = require('brace');
    let Range = ace.acequire('ace/range').Range;
    let session = editor.getSession();
    editor.setReadOnly(false);
    editor.$blockScrolling = Infinity;
    editor.setOption("dragEnabled", false);
    let markerIds = [];
    let ranges = [];
    if (levelKeyword !== 'all') {
      block.codeblock[levelKeyword + 'Ranges'].forEach(range => {
        let newRange = new Range(range[0], range[1], range[2], range[3]);
        let markerId = session.addMarker(newRange, "editable", "noedit", false);
        markerIds.push(markerId);
        newRange.start  = session.doc.createAnchor(newRange.start);
        newRange.end    = session.doc.createAnchor(newRange.end);
        newRange.end.$insertRight = true;
        ranges.push(newRange);
      });
    } else {
      editor.setReadOnly(true);
      let newRange = new Range(0, 0, 100, 0);
      let markerId = session.addMarker(newRange, "editable", "noedit", false);
      markerIds.push(markerId);
    }

    editor.keyBinding.addKeyboardHandler({
        handleKeyboard : function(data, hash, keyString, keyCode, event) {
          if (hash === -1 || (keyCode <= 40 && keyCode >= 37)) return false;

          let selectedRange = editor.getSelectionRange();
          let safeEdit = true;

          ranges.forEach(range => {
            let currentRange = selectedRange.clone();
            if (currentRange.intersects(range)) {
              safeEdit = false;
            }
          });

          if (!safeEdit) {
            return {command:"null", passEvent:false};
          }
        }
    });
    this.setState({ markerIds });
  }

  render() {
    return this.state.html;
  }
}

export default BlockProblem;
