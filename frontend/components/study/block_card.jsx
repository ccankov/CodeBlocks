import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/xcode';
import * as _ from 'lodash';
import '../../util/selected_languages';
import BlockProblem from './block_problem';

class BlockCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { block, showSolution } = this.props;
    let language = block ? block.language.name : '';
    let conceptLis = block ? block.concepts.map((concept, idx) => (
      <div className="label bw" key={ idx }>{ concept }</div>
    )) : [];
    let level = block && block.mastery ? block.mastery : 'Unanswered';
    let lvl = '';
    switch (level) {
      case "Novice":
        lvl = 'error-text';
        break;
      case "Intermediate":
        lvl = 'neutral-text';
        break;
      case "Master":
        lvl = 'good-text';
        break;
    }
    let solution = block && showSolution ? (
      <section className="col code-pane solution">
        <AceEditor
          mode={ block.language.name }
          theme="xcode"
          name="solution"
          fontSize={16}
          focus={true}
          readOnly={true}
          highlightActiveLine={false}
          style={{ width: "100%", backgroundColor: "#f2f2f2", opacity: 1 }}
          value={ block.codeblock.allLines.join('\n') }
          editorProps={{$blockScrolling: true}}
        />
        <section className="row output-row">
          <p className="output-label">
            OUTPUT
          </p>
          <p className="output">
            >
            <input defaultValue={ block.output } disabled></input>
          </p>
        </section>
      </section>
    ) : '';
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
            <h1>Level: <strong
              className={ lvl }>
              { level }
            </strong>
            </h1>
          </div>
        </header>
        <section className="col card-main">
          <h1>
            { block ? block.prompt : '' }
          </h1>
          <section className="row code-container">
            <BlockProblem
              block={ block }
              showSolution={ showSolution }
            />
            { solution }
          </section>
        </section>
      </article>
    );
  }
}

export default BlockCard;
