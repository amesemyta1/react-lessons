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
    // const button = this.state.isLoggedIn ? Logout(this.handleLogout) : Login(this.handleLogin);

    return <div className="status">{this.state.isOnline ? Online() : Offline()}</div>;
  }
}

export default Status;
