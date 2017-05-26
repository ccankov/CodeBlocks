export const allConcepts = (state) => {
  let conceptIds = Object.keys(state.concepts);
  return conceptIds.map(conceptId => state.concepts[conceptId].name);
};

export const conceptsByName = (state) => {
  let concepts = {};
  for (var idx in state.concepts) {
    if (state.concepts.hasOwnProperty(idx)) {
      concepts[state.concepts[idx].name] = state.concepts[idx];
    }
  }
  return concepts;
};
