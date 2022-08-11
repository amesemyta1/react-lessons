import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      loading: false,
      size: 25,
    };
  }

  showLogin = () => {
    this.setState({
      isLogined: false,
    });
  };

  setStatusHandler = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        isLogined: true,
        loading: false,
      });
    }, 2000);
  };

  render() {
    if (this.state.loading) {
      return <Spinner size={this.state.size} />;
    }
    return this.state.isLogined ? (
      <Logout onLogout={this.showLogin} />
    ) : (
      <Login onLogin={this.setStatusHandler} />
    );
  }
}

export default Auth;
