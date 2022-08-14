import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    onlineStatus: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus = e => {
    if (e.type === 'offline') {
      this.setState({
        onlineStatus: 'offline',
      });
    }
    if (e.type === 'online') {
      this.setState({
        onlineStatus: 'online',
      });
    }
  };

  render() {
    const status = this.state.onlineStatus;
    return status === 'online' ? (
      <div className="status">{this.state.onlineStatus}</div>
    ) : (
      <div className="status status_offline">{this.state.onlineStatus}</div>
    );
  }
}

export default ConnectionStatus;
