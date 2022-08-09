import React, { Component } from 'react';

class GoodButton extends Component {
  handleClick(e) {
    alert('Click me!');
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
