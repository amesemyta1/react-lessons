import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

//put your code here

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset),
    };
    // Do Not This Way
    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{moment(this.state.time).format('LTS')}</div>
      </div>
    );
  }
}

export default Clock;
