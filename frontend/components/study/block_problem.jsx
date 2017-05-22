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

  removeMarkers(editor, block) {
    let session = editor.getSession();
    this.state.markerIds.forEach(markerId => session.removeMarker(markerId));
    this.setupEditor(editor, block);
  }

  componentDidMount() {
    this.processProps(this.props);
  }

  processProps(props) {
    let block = props.block;
    let language = block.language.name;
    let codeblock = block.codeblock.allLines.join('\n');
    this.setState({
      html: (
        <section className="col code-pane">
          <AceEditor
            mode={ block ? language : "text" }
            theme="xcode"
            name="block"
            fontSize={16}
            focus={true}
            onLoad={this.editorLoad}
            style={{ width: "100%" }}
            value={ codeblock }
            editorProps={{$blockScrolling: true}}
            />
          <section className="row output-row">
            <p className="output-label">
              OUTPUT
            </p>
            <p className="output">
              >
              <input defaultValue={ block.output }></input>
            </p>
          </section>
        </section>
      )
    });
    if (this.state.editor) {
      this.removeMarkers(this.state.editor, block);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.block && !newProps.showSolution) {
      this.processProps(newProps);
    }
  }

  editorLoad(editor) {
    this.setState({ editor });
  }

  setupEditor(editor, block) {
    let ace = require('brace');
    let Range = ace.acequire('ace/range').Range;
    let session = editor.getSession();
    session.setValue(block.codeblock.allLines.join('\n'));
    editor.$blockScrolling = Infinity;
    editor.setOption("dragEnabled", false);
    let markerIds = [];
    let ranges = [];
    block.codeblock.editRanges.forEach(range => {
      let newRange = new Range(range[0], range[1], range[2], range[3]);
      session.replace(newRange, "space");
      let markerId = session.addMarker(newRange, "editable", "editable", false);
      markerIds.push(markerId);
      ranges.push(newRange);
      newRange.start  = session.doc.createAnchor(newRange.start);
      newRange.end    = session.doc.createAnchor(newRange.end);
    });

    editor.keyBinding.addKeyboardHandler({
        handleKeyboard : function(data, hash, keyString, keyCode, event) {
          if (hash === -1 || (keyCode <= 40 && keyCode >= 37)) return false;

          let selectedRange = editor.getSelectionRange();
          let safeEdit = false;

          ranges.forEach(range => {
            let currentRange = selectedRange.clone();
            if (currentRange.end.column === currentRange.start.column &&
                currentRange.start.row === currentRange.end.row) {
                  currentRange.end.column++;
                  currentRange.start.column--;
                }
            if (range.containsRange(currentRange)) {
              safeEdit = true;
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
