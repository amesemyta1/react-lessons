import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState({ currentTime: getTimeWithOffset(offset) });
  const { currentTime } = time;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        currentTime: getTimeWithOffset(offset),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{moment(currentTime).format('LTS')}</div>
    </div>
  );
};

export default Clock;
