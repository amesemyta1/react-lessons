import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  constructor(props) {
    super(props);
  }

  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="Colors">
        <button
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
          className="colors__button"
        ></button>
        <button
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
        ></button>
        <button
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
        ></button>
      </div>
    );
  }
}

export default Colors;
