export const allLanguages = (state) => {
  let languageIds = Object.keys(state.languages);
  return languageIds.map(languageId => state.languages[languageId]);
};

export const languagesByName = (state) => {
  let languages = {};
  for (var idx in state.languages) {
    if (state.languages.hasOwnProperty(idx)) {
      languages[state.languages[idx].name] = state.languages[idx];
    }
  }
  return languages;
};
