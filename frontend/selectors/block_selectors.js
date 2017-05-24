function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

export const blockQueues = (state) => {
  let queues = {
    unanswered: [],
    novice: [],
    intermediate: [],
    master: []
  };

  for (var blockId in state.blocks) {
    if (state.blocks.hasOwnProperty(blockId)) {
      let block = state.blocks[blockId];
      switch (block.mastery) {
        case "Master":
          queues.master.push(block);
          break;
        case "Intermediate":
          queues.intermediate.push(block);
          break;
        case "Novice":
          queues.novice.push(block);
          break;
        default:
          queues.unanswered.push(block);
      }
    }
  }

  return {
    unanswered: shuffle(queues.unanswered),
    novice: shuffle(queues.novice),
    intermediate: shuffle(queues.intermediate),
    master: shuffle(queues.master)
  };
};

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
