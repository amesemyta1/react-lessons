import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.colorText = {
      text: '',
    };
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.colorText}</div>
        <div>
          <button className="picker__button picker__button_coral"></button>
          <button className="picker__button picker__button_aqua"></button>
          <button className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
