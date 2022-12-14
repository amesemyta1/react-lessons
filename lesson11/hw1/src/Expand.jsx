/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const icon = !this.state.isOpen ? (
      <i className="fas fa-chevron-down"></i>
    ) : (
      <i className="fas fa-chevron-up"></i>
    );

    const handleButton = !this.state.isOpen ? this.showContent : this.hideContent;
    const handleContent = !this.state.isOpen ? null : this.props.children;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={handleButton}>
            {icon}
          </button>
        </div>
        <div className="expand__content">{handleContent}</div>
      </div>
    );
  }
}

export default Expand;
