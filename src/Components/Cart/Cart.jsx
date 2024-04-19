//import React, { useState } from 'react'

// const Cart = () => {
//  <div>cart</div>
// }

// export default Cart


import React from 'react';

const CartPage = ({ location }) => {
  const { state } = location;
  const cartItems = state && state.cart ? state.cart : [];

  return (
    <div className="container">
      <h2 className="heading">Cart</h2>
      <div className="cartItems">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
