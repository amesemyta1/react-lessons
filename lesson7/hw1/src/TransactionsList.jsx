import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map(transactions => (
          <Transaction key={transactions.id} {...transactions} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
