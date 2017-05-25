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

const blockQueues = (blocks) => {
  let queues = {
    unanswered: [],
    novice: [],
    intermediate: [],
    master: []
  };

  blocks.forEach(block => {
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
  });

  return {
    unanswered: shuffle(queues.unanswered),
    novice: shuffle(queues.novice),
    intermediate: shuffle(queues.intermediate),
    master: shuffle(queues.master)
  };
};

export default blockQueues;
