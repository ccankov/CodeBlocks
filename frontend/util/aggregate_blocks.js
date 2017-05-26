import arrayBlocks from './array_blocks';

const emptyAggregate = {
  totalBlocks: 0,
  mastery: 0,
  languages: [],
  languageTags: [],
  concepts: [],
  conceptTags: [],
  blockIds: [],
  unanswered: 0,
  novice: 0,
  intermediate: 0,
  master: 0
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

const setupTags = (aggregate) => {
  aggregate.languageTags = aggregate.languages.map((lang, idx) => ({
    id: idx + 1,
    text: lang
  }));
  aggregate.conceptTags = aggregate.concepts.map((concept, idx) => ({
    id: idx + 1,
    text: concept
  }));
};

const aggregateBlocks = (blocks) => {
  blocks = arrayBlocks(blocks);
  let aggregate = Object.assign({}, emptyAggregate);
  aggregate.languages = [];
  aggregate.concepts = [];
  aggregate.languageTags = [];
  aggregate.conceptTags = [];
  aggregate.blockIds = [];
  blocks.forEach(block => {
    aggregate.totalBlocks++;
    aggregate.blockIds.push(block.id);
    countConceptsAndLanguages(block, aggregate);
    incrementMasteryCounts(block, aggregate);
  });
  setupTags(aggregate);
  aggregate.mastery = Math.floor(
    (aggregate.master / aggregate.totalBlocks) * 100
  );
  return aggregate;
};

export default aggregateBlocks;
