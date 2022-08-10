import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  changeStatus() {
    if (this.state.status === 'Off') {
      this.setState({
        status: 'On',
      });
    } else {
      this.setState({
        status: 'Off',
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
