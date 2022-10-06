import getUserData from './users.gateway';

export const SHOW_SPINNER = 'USERS/SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USERS/USER_DATA_RECIEVED';

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const userDataRecieved = userData => ({
  type: USER_DATA_RECIEVED,
  payload: {
    userData,
  },
});

export const fetchUserData = userName =>
  function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      dispatch(userDataRecieved(userData));
    });
  };
