import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  changeColorTitle = color => {
    this.setState({
      text: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.changeColorTitle('Coral')}
            onMouseLeave={() => this.changeColorTitle('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.changeColorTitle('Aqua')}
            onMouseLeave={() => this.changeColorTitle('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.changeColorTitle('Bisque')}
            onMouseLeave={() => this.changeColorTitle('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
