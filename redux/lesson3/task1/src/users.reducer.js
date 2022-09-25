/* eslint-disable default-param-last */
import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case DELETE_USER: {
      const newList = state.usersList.filter(user => action.payload.userId !== user.id);
      return {
        ...state,
        usersList: newList,
      };
    }
    case UPDATE_USER: {
      const newList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: newList,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;