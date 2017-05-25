const emptyAggregate = {
  totalBlocks: 0,
  mastery: 0,
  languages: [],
  concepts: [],
  blockIds: [],
  unanswered: 0,
  novice: 0,
  intermediate: 0,
  master: 0
};

const convertObjToArr = (blocks) => {
  if (!Array.isArray(blocks)) {
    let blockIds = Object.keys(blocks);
    blocks = blockIds.map(blockId => blocks[blockId]);
  }
  return blocks;
};

const countConceptsAndLanguages = (block, aggregate) => {
  if (!aggregate.languages.includes(block.language.name)) {
    aggregate.languages.push(block.language.name);
  }
  block.concepts.forEach(concept => {
    if (!aggregate.concepts.includes(concept)) {
      aggregate.concepts.push(concept);
    }
  });
};

const incrementMasteryCounts = (block, aggregate) => {
  switch (block.mastery) {
    case undefined:
      aggregate.unanswered++;
      break;
    case "Unanswered":
      aggregate.unanswered++;
      break;
    case "Novice":
      aggregate.novice++;
      break;
    case "Intermediate":
      aggregate.intermediate++;
      break;
    case "Master":
      aggregate.master++;
      break;
  }
};

const aggregateBlocks = (blocks) => {
  blocks = convertObjToArr(blocks);
  let aggregate = Object.assign({}, emptyAggregate);
  blocks.forEach(block => {
    aggregate.totalBlocks++;
    aggregate.blockIds.push(block.id);
    countConceptsAndLanguages(block, aggregate);
    incrementMasteryCounts(block, aggregate);
  });
  aggregate.mastery = Math.floor(
    (aggregate.master / aggregate.totalBlocks) * 100
  );
  return aggregate;
};

export default aggregateBlocks;
