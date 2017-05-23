export const allLanguages = (state) => {
  let languageIds = Object.keys(state.languages);
  return languageIds.map(languageId => state.languages[languageId]);
};
