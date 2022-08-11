import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  render() {
    const status = this.state.isOnline ? Online() : Offline();

    return <div className="status">{status}</div>;
  }
}

export default Status;
