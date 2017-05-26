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
  if (!aggregate.languages.includes(block.language_id)) {
    aggregate.languages.push(block.language_id);
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

const setupTags = (aggregate, concepts, languages) => {
  aggregate.languageTags = aggregate.languages.map((lang, idx) => ({
    id: idx + 1,
    text: languages[lang].name
  }));
  aggregate.conceptTags = aggregate.concepts.map((concept, idx) => ({
    id: idx + 1,
    text: concepts[concept].name
  }));
};

const aggregateBlocks = (blocks, concepts, languages) => {
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
  setupTags(aggregate, concepts, languages);
  aggregate.languages.map(langId => languages[langId].name);
  aggregate.concepts.map(conceptId => concepts[conceptId].name);
  aggregate.mastery = Math.floor(
    (aggregate.master / aggregate.totalBlocks) * 100
  );
  return aggregate;
};

export default aggregateBlocks;
