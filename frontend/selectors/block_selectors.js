import arrayBlocks from '../util/array_blocks';

export const libraryBlocks = (state) => {
  if (!state.session.currentUser) {
    return [];
  } else {
    let curUserId = state.session.currentUser.id;
    let blockIds = Object.keys(state.blocks);
    let allBlocks = blockIds.map(blockId => state.blocks[blockId]);
    let libBlocks = allBlocks.filter(block => block.author.id === curUserId);
    return libBlocks;
  }
};

export const filteredBlocks = (state, langs = [], concepts = [], personal) => {
  if (langs.length === 0 && concepts.length === 0) {
    return [];
  }

  let blocks = personal ? libraryBlocks(state) : arrayBlocks(state.blocks);

  if (langs.length > 0) {
    blocks = blocks.filter(block => langs.includes(block.language.name));
  }
  if (concepts.length > 0) {
    blocks = blocks.filter(block => {
      let good = false;
      concepts.forEach(concept => {
        if (block.concepts.includes(concept)) {
          good = true;
          return;
        }
      });
      return good;
    });
  }
  return blocks;
};
