import React from 'react';

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    const { value } = e.target;

    this.props.onFilterTextChange(value);
  };

  handleInStockChange = e => {
    const { checked } = e.target;

    this.props.onInStockChange(checked);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
