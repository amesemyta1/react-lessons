import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLogin: props.onLogin,
    };
  }

  render() {
    return (
      <button className="login btn" onClick={this.state.onLogin}>
        Login
      </button>
    );
  }
}

export default Login;
