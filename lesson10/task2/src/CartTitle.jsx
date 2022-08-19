/* eslint-disable class-methods-use-this */
import React from 'react';

const CartTitle = ({ userName, count }) => {
  return <div className="cart-title">{`${userName}, you added ${count} products`}</div>;
};

export default CartTitle;
