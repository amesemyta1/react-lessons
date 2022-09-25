/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer';
import productsReducer from './cart.reducer';
import languageReducer from './language.reducer';

const appReduser = combineReducers({
  cart: productsReducer,
  user: userReducer,
  language: languageReducer,
});
const store = createStore(
  appReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
