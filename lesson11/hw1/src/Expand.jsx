/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Expand extends Component {
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
    const icon = !this.state.isOpen ? (
      <i class="fas fa-chevron-down"></i>
    ) : (
      <i class="fas fa-chevron-up"></i>
    );

    const btnState = !this.state.isOpen ? this.showDialog : this.hideDialog;
    const contentState = !this.state.isOpen ? '' : this.props.children;

    return (
      <div class="expand border">
        <div class="expand__header">
          <span class="expand__title">{this.props.title}</span>
          <button class="expand__toggle-btn" onClick={btnState}>
            {icon}
          </button>
        </div>
        <div class="expand__content">{contentState}</div>
      </div>
    );
  }
}

export default Expand;
