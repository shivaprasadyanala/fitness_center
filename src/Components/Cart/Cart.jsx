import React, { useState, useContext } from 'react'
import { cartContext } from '../MyRoutes/MyRoutes'
const Cart = ({ length }) => {
  // const [cart, setCart] = useState([])
  const { cartItems, removeFromCart } = useContext(cartContext)
  const services = cartItems.services
  console.log(services);

  return (
    <div className="cart">
      {/* {length} */}
      <h3>Cart</h3>
      {services.length > 0 ?
        <div>
          {cartItems.centername}
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