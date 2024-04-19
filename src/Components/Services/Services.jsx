import React from 'react'
import data from '../../data.json'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './services.css'
import Cart from '../Cart/Cart'
const Services = ({ randomData, index }) => {
 const [cartItems, setCartItems] = useState([]);

 const addToCart = (item) => {
  if (!cartItems.includes(item)) {
   setCartItems([...cartItems, item]);
   localStorage.setItem('items', JSON.stringify(cartItems))
   // Replace cart with the new service
   alert(`${item} added to cart`);
  } else {
   alert(`${item} already in the cart`)
  }

 };
 const ser_data = data.services
 const location = useLocation();
 const removeFromCart = (index) => {
  const newCartItems = [...cartItems];
  newCartItems.splice(index, 1);
  setCartItems(newCartItems);
 };
 return (
  <div className='serviceswrapper'>
   {cartItems && <Cart length={cartItems.length} services={cartItems} removeFromCart={removeFromCart} />
   }

   <div >
    <h1 className='serviceheader'>{location.state.serviceName}</h1>
    <ul className='serviceslist'>
     {location.state.randomData && location.state.randomData.map((service, index) => (

      <li key={index} className='serviceitem'>
       <p>{service.name}</p>
       <button className="addToCartButton" onClick={() => addToCart(service.name)}>
        Add to Cart
       </button>
      </li>
     ))}
    </ul>
   </div>
  </div>
 )
}

export default Services