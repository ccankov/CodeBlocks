import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/xcode';
import '../../util/selected_languages';

class BlockCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { block, showSolution } = this.props;
    let level = block && block.mastery ? block.mastery : "Unanswered";
    let lvl;
    switch (level) {
      case "Novice":
        lvl = 'error-text';
        break;
      case "Intermediate":
        lvl = 'neutral-text';
        break;
      case "Master":
        lvl= 'good-text';
        break;
    }
    let language = block ? block.language.name : '';
    let conceptLis = block ? block.concepts.map((concept, idx) => (
      <div className="label bw" key={ idx }>{ concept }</div>
    )) : [];
    let codeblock = block ? block.codeblock.allLines.join('\n') : '';
    let output = '';
    if (block && block.output) {
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
    let solution = '';
    if (showSolution) {
      solution = (
        <section className="one-half solution">
          <AceEditor
            mode={ block ? language : "text" }
            theme="xcode"
            name="block"
            highlightActiveLine={false}
            fontSize={16}
            readOnly={true}
            style={{ width: "100%", backgroundColor: "#f7f7f5", opacity: 0.7 }}
            value={ codeblock }
            editorProps={{$blockScrolling: true}}
            />
          { output }
        </section>
      );
    }
    return (
      <article className="study-block">
        <header className="row">
          <div className="row">
            <i className={ "icon-" + language }></i>
            <h1>{ language }</h1>
          </div>
          <ul className="row">
            { conceptLis }
          </ul>
          <div className="row">
            <h1>Level: <strong className={ lvl }>{ level }</strong></h1>
          </div>
        </header>
        <section className="col card-main">
          <h1>
            { this.props.block ? this.props.block.prompt : '' }
          </h1>
          <section className="row code-container">
            <section>
              <AceEditor
                mode={ block ? language : "text" }
                theme="xcode"
                name="block"
                fontSize={16}
                focus={true}
                style={{ width: "100%" }}
                value={ codeblock }
                editorProps={{$blockScrolling: true}}
                />
              { output }
            </section>
            { solution }
          </section>
        </section>
      </article>
    );
  }
}

export default BlockCard;
