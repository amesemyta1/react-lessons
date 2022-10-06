/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users.reducer';

const mainReducer = combineReducers({
  users: usersReducer,
});

const logger = store => next => action => {
  console.group(action.type);
  console.info(`dispatching`, action);
  const result = next(action);
  console.log(`new state `, store.getState());
  console.groupEnd(result);

  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)),
);

export default store;
