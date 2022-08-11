import React, { Component } from 'react';

class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: props.size,
        width: props.size,
      },
      hide: props.spinnerHide,
    };
  }

  hideSpinner = () => {
    this.setState({
      hide: this.state.hide,
    });
  };

  render() {
    return <span className="spinner" style={this.state.style}></span>;
  }
}

export default Spinner;
