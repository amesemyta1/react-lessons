import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = e => {
    e.preventDefault();
    console.log(this.props.state);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
