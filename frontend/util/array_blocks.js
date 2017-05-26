const arrayBlocks = (blocks) => {
  if (!Array.isArray(blocks)) {
    let blockIds = Object.keys(blocks);
    blocks = blockIds.map(blockId => blocks[blockId]);
  }
  return blocks;
};

export default arrayBlocks;
