/* eslint-disable default-param-last */
import { SET_LANGUAGE } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload.lang;
    }

    default:
      return state;
  }
};
export default languageReducer;
