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
      html: <div></div>,
      code: '',
      ranges: []
    };

    this.processProps = this.processProps.bind(this);
    this.editorLoad = this.editorLoad.bind(this);
    this.setupEditor = this.setupEditor.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  componentDidMount() {
    this.processProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.block && !newProps.showSolution) {
      this.processProps(newProps);
    }
  }

  editorLoad(editor) {
    editor.getSession().setUseSoftTabs(false);
    this.setState({ editor });
  }

  handleCodeChange(code) {
    let currentRange = this.state.editor.getSelection().getRange();
    this.state.ranges.forEach(range => {
      if (range.containsRange(currentRange)) {
        let colDiff = range.end.column - range.start.column;
        if ((
          range.start.row + 1 === range.end.row &&
          this.state.editor.getSession().getLine(range.start.row).length < 1
        )) {
          this.state.editor.insert(" ");
          return;
        }
      }
    });
    this.setState({ code }, () => {
      this.state.editor.updateSelectionMarkers();
    });
  }

  removeMarkers() {
    let session = this.state.editor.getSession();
    this.state.markerIds.forEach(markerId => session.removeMarker(markerId));
    this.setupEditor();
  }

  processProps(props) {
    let { block, levelKeyword } = props;
    let language = block.language.name;
    let code = block.codeblock[levelKeyword + 'Lines'].join('\n');
    this.setState({ code }, () => {
      let output = '';
      if (block.output) {
        let outputInput = levelKeyword === 'all'
          ? <input defaultValue='' className="output-input"></input>
          : <input
        value={ block.output }
        className="output-input"
        disabled></input>;
        output = (
          <section className="row output-row">
            <p className="output-label">
              OUTPUT
            </p>
            <p className="output">
              >
              { outputInput }
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
              onChange={this.handleCodeChange}
              style={{ width: "100%", backgroundColor: "#f2f2f2" }}
              value={ code }
              editorProps={{$blockScrolling: true}}
              />
            { output }
          </section>
        )
      },() => {
        this.removeMarkers();
      });
    });
  }

  setupEditor() {
    let ace = require('brace');
    let Range = ace.acequire('ace/range').Range;
    let editor = this.state.editor;
    let { block, levelKeyword } = this.props;
    let session = editor.getSession();
    editor.setReadOnly(false);
    editor.$blockScrolling = Infinity;
    editor.setOption("dragEnabled", false);
    let markerIds = [];
    let ranges = [];
    let editRanges = [];
    if (levelKeyword !== 'all') {
      block.codeblock[levelKeyword + 'Ranges'].forEach(range => {
        let newRange = new Range(range[0], range[1], range[2], range[3]);
        markerIds.push(markerId);
        newRange.start  = session.doc.createAnchor(newRange.start);
        newRange.end    = session.doc.createAnchor(newRange.end);
        newRange.end.$insertRight = true;
        let markerId = session.addMarker(newRange, "uneditable", "read", false);
        ranges.push(newRange);
      });
      if (levelKeyword === 'keyword') {
        block.codeblock.editRanges.forEach(range => {
          let newRange = new Range(range[0], range[1], range[2], range[3]);
          newRange.start  = session.doc.createAnchor(newRange.start);
          newRange.end    = session.doc.createAnchor(newRange.end);
          let markerId = session.addMarker(newRange, "editable", "wr", false);
          markerIds.push(markerId);
          editRanges.push(newRange);
        });
      } else {
        block.codeblock.editLines.forEach(lineNum => {
          let newRange = new Range(lineNum, 0, lineNum + 1, 0);
          newRange.start  = session.doc.createAnchor(newRange.start);
          newRange.end    = session.doc.createAnchor(newRange.end);
          let markerId = session.addMarker(newRange, "editline", "wr", false);
          markerIds.push(markerId);
          editRanges.push(newRange);
        });
      }
    } else {
      editor.setReadOnly(true);
      let newRange = new Range(0, 0, 100, 0);
      let markerId = session.addMarker(newRange, "uneditable", "read", false);
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
          editRanges.forEach(range => {
            let currentRange = selectedRange.clone();
            if (currentRange.intersects(range)) {
              let colDiff = range.end.column - range.start.column;
              if (colDiff < 3 && range.start.row === range.end.row && keyCode === 8) {
                safeEdit = false;
              }
            }
          });

          if (!safeEdit) {
            return {command:"null", passEvent:false};
          }
        }
    });
    this.setState({ markerIds, ranges: editRanges });
  }

  render() {
    return this.state.html;
  }
}

export default BlockProblem;
