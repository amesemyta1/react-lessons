/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class Page extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
          <Profile userData={userData} handleChange={this.handleChange} />;
        </main>
      </div>
    );
  }
}

export default Page;
