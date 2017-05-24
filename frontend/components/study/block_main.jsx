import React from 'react';

import BlockProblem from './block_problem';
import BlockSolution from './block_solution';

class BlockMain extends React.Component {
  determineLevel() {
    let block = this.props.block;
    let levels = [];
    if (block.output) { levels.push('all'); }
    if (block.codeblock.keywordLines) { levels.push('keyword'); }
    if (block.codeblock.logicLines) { levels.push('logic'); }
    let level = block.level ? block.level: 0;
    if (block.max_level && block.level === block.max_level) { level--; }
    return levels[level];
  }

  render() {
    let levelKeyword = this.determineLevel();
    let { block, showSolution } = this.props;
    if (!block) { return <section className="col card-main"></section>; }
    let prompt = block.prompt;
    if (levelKeyword === 'all') {
      prompt = 'What is the output of the following code block?';
    }
    let solution = showSolution
      ? <BlockSolution block={ block } levelKeyword={ levelKeyword } /> 
      : '';
    return (
      <section className="col card-main">
        <h1>
          { prompt }
        </h1>
        <section className="row code-container">
          <BlockProblem
            block={ block }
            showSolution={ showSolution }
            levelKeyword={ levelKeyword } />
          { solution }
        </section>
      </section>
    );
  }
}

export default BlockMain;
