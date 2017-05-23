export const allConcepts = (state) => {
  let conceptIds = Object.keys(state.concepts);
  return conceptIds.map(conceptId => state.concepts[conceptId].name);
};
