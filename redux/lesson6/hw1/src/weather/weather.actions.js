/* eslint-disable func-names */
import getWeatherCityData from './weather.gateway';

export const GET_WEATHER_LIST = 'WEATHER/GET_WEATHER_LIST';

export const weatherDataRecieved = cityList => ({
  type: GET_WEATHER_LIST,
  payload: {
    cityList,
  },
});

export const getWeatherData = () =>
  function (dispatch) {
    getWeatherCityData().then(weatherData => {
      dispatch(weatherDataRecieved(weatherData));
    });
  };
