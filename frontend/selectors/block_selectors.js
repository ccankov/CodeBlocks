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
