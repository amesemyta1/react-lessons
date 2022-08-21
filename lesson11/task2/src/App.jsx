/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const elem = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show
        </button>
        <Dialog isOpen={this.state.isOpen} onClose={this.hideDialog} title="Recommendation">
          {elem}
        </Dialog>
      </div>
    );
  }
}

export default App;
