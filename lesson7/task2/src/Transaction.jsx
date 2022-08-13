/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const date = moment(time).format('D, MMM');
  const dateTime = moment(time).format('HH:mm');
  const amountFormat = new Intl.NumberFormat('en-GB').format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{dateTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amountFormat}</span>
    </li>
  );
};

export default Transaction;
