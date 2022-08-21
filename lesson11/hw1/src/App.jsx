/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return <Expand title="Some title">{elem}</Expand>;
  }
}

export default App;
