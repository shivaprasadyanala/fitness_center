import React, { useContext } from 'react';
import { cartContext } from '../MyRoutes/MyRoutes';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const Cart = ({ length }) => {
  const { cartItems, removeFromCart } = useContext(cartContext);
  const services = cartItems.services;
  const navigate = useNavigate();
  const cartContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontFamily: 'Roboto,sans-serif',
  };

  const cartStyle = {
    width: '50%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  };
  console.log(`cart items${cartItems}`);
  return (
    <div className="cart-container" style={cartContainerStyle}>
      <button className='backButton' onClick={() => navigate(-1)}><IoMdArrowBack /></button>

      <div className="cart" style={cartStyle}>
        <h3><b>Cart</b></h3>
        {services.length > 0 ? (
          <div>
            <b>{cartItems.centername}</b>
            {services.map((service, index) => (
              <div key={index} style={itemStyle}>
                <p>{service.item}</p>
                <p>{service.price}</p>

                <button className="removeFromCartButton" style={buttonStyle} onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;