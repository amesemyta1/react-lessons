import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import weatherDataSelector from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ cityWeatherList, getWeatherData }) => {
  useEffect(() => getWeatherData(), []);
  if (!cityWeatherList) {
    return null;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cityWeatherList.map(({ id, name, temperature }) => (
          <li className="city" key={id}>
            <span className="city__name">{name}</span>
            <span className="city__temperature">{`${temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => ({
  cityWeatherList: weatherDataSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
