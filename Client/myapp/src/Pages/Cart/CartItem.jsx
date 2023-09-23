// CartItem.js

import React from 'react';
import './style.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: $ {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
