import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: this.props.filterText,
    };
  }

  state = {
    value: '',
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={e => this.props.onChange(e.target.value)}
          value={this.props.filterText}
        />
      </div>
    );
  }
}

export default Filter;
