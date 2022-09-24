import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const counterReducer = (store = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return store + 1;
    case DECREMENT:
      return store - 1;
    default:
      return store;
  }
};

export const store = createStore(counterReducer);
