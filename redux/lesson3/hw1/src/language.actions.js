export const SET_LANGUAGE = 'LANGUAGE/SET_LANGUAGE';

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: {
    lang,
  },
});
