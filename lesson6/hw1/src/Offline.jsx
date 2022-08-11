import React, { Component } from 'react';

class Offline extends Component {
  render() {
    return (
      <>
        <span className="status__text">Offline</span>
        <button className="status__btn">Reconnect</button>
      </>
    );
  }
}

export default Offline;
