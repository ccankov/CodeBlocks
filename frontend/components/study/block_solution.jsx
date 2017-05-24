import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/xcode';
import * as _ from 'lodash';
import '../../util/selected_languages';

class BlockSolution extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: null,
      markerIds: []
    };

    this.editorLoad = this.editorLoad.bind(this);
    this.setupEditor = this.setupEditor.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
  }

  editorLoad(editor) {
    editor.getSession().setUseSoftTabs(false);
    this.setState({ editor }, () => this.setupEditor());
  }

  removeMarkers() {
    let session = this.state.editor.getSession();
    this.state.markerIds.forEach(markerId => session.removeMarker(markerId));
    this.setupEditor();
  }

  setupEditor() {
    let ace = require('brace');
    let Range = ace.acequire('ace/range').Range;
    let editor = this.state.editor;
    let { block, levelKeyword } = this.props;
    let session = editor.getSession();
    editor.$blockScrolling = Infinity;
    editor.setOption("dragEnabled", false);
    let markerIds = [];
    let ranges = [];
    if (levelKeyword === 'keyword') {
      block.codeblock.editRanges.forEach(range => {
        let newRange = new Range(range[0], range[1], range[2], range[3]);
        newRange.start  = session.doc.createAnchor(newRange.start);
        newRange.end    = session.doc.createAnchor(newRange.end);
        let markerId = session.addMarker(newRange, "sol-ranges", "wr", false);
        markerIds.push(markerId);
      });
    } else if (levelKeyword === 'logic') {
      block.codeblock.editLines.forEach(lineNum => {
        let newRange = new Range(lineNum, 0, lineNum + 1, 0);
        newRange.start  = session.doc.createAnchor(newRange.start);
        newRange.end    = session.doc.createAnchor(newRange.end);
        let markerId = session.addMarker(newRange, "editline", "wr", false);
        markerIds.push(markerId);
      });
    }
    this.setState({ markerIds });
  }

  render() {
    let { block, levelKeyword } = this.props;
    let output = (
      <section className="row output-row">
        <p className="output-label">
          OUTPUT
        </p>
        <p className="output">
          >
          <input
            className={ levelKeyword === 'all' ? "solution-output" : '' }
            defaultValue={ block.output }
            disabled></input>
        </p>
      </section>
    );
    return (
      <section className="col code-pane solution">
        <AceEditor
          mode={ block.language.name }
          theme="xcode"
          name="solution"
          fontSize={16}
          focus={true}
          onLoad={this.editorLoad}
          readOnly={true}
          highlightActiveLine={false}
          style={{ width: "100%", backgroundColor: "#f2f2f2" }}
          value={ block.codeblock.allLines.join('\n') }
          editorProps={{$blockScrolling: true}}
        />
      { output }
      </section>
    );
  }
}

export default BlockSolution;
