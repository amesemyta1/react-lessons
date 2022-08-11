import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLogout: props.onLogout,
    };
  }

  render() {
    return (
      <button className="logout btn" onClick={this.state.onLogout}>
        Logout
      </button>
    );
  }
}

export default Logout;
