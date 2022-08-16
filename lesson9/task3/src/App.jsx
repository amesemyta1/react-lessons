/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  createUser = user => {
    console.log(user);
  };

  render() {
    return (
      <UserForm
        onSubmit={user => {
          this.createUser(user);
        }}
      />
    );
  }
}

export default App;
