import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

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
        <section className="card-main">
          <h1>
            { this.props.block ? this.props.block.prompt : '' }
          </h1>
          <AceEditor
            mode="java"
            theme="github"
            name="block"
          />,
          <p className="output">

          </p>
        </section>
      </article>
    );
  }
}

export default BlockCard;
