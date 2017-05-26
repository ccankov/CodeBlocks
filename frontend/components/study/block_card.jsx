import React from 'react';

import BlockMain from './block_main';

const BlockCard = ({block, showSolution, showProblem, concepts, languages}) => {
  let props = {block, showSolution, showProblem, concepts, languages};
  let language = block ? languages[block.language_id].name : '';
  let conceptLis = block ? block.concepts.map((concept, idx) => (
    <div className="label bw" key={ idx }>{ concepts[concept].name }</div>
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
      <BlockMain {...props} />
    </article>
  );
};

export default BlockCard;
