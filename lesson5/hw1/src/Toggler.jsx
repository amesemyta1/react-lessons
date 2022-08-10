import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Off',
    };
  }

  changeStatus(e) {
    if (e.target.textContent === 'Off') {
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
      <div className="toggler" onClick={e => this.changeStatus(e)}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
