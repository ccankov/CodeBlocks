import React from 'react';

import BlockMain from './block_main';

const BlockCard = ({ block, showSolution, showProblem }) => {
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
      <BlockMain
        block={ block }
        showSolution={ showSolution }
        showProblem={ showProblem }
      />
    </article>
  );
};

export default BlockCard;
