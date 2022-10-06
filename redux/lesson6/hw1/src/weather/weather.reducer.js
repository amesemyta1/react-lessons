/* eslint-disable default-param-last */
import { GET_WEATHER_LIST } from './weather.actions';

const initialData = {
  cityWeatherList: null,
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_WEATHER_LIST: {
      return {
        ...state,
        cityWeatherList: action.payload.cityList,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
