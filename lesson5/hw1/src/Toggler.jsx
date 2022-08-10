import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'off',
    };
  }

  changeStatus() {
    if (this.state.status === 'off') {
      this.setState({
        status: 'on',
      });
    } else {
      this.setState({
        status: 'off',
      });
    }
  }

  render() {
    return (
      <div class="toggler" onClick={() => this.changeStatus()}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
