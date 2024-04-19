import React, { useState, removeFromCart } from 'react'

const Cart = ({ services, length, removeFromCart }) => {
 const [cart, setCart] = useState([])



 return (
  <div className="cart">
   {/* {length} */}
   <h3>Cart</h3>
   {length > 0 ?
    <div>
     {services.map((service, index) => (
      <div key={index}>
       {service}{' '}
       <button className="removeFromCartButton" onClick={() => removeFromCart(index)}>
        Remove
       </button>
      </div>
     ))}
    </div>
    : (
     <p>No items in cart</p>
    )}
  </div>
 )
}

export default Cart