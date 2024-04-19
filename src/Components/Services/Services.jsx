import React from 'react'
import data from '../../data.json'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './services.css'
import Cart from '../Cart/Cart'

import cardio from '../Assets/images/cardio.jpeg'
import weight_loss from '../Assets/images/weight_loss.jpeg'
import yoga from '../Assets/images/yoga.jpeg'
import zumba from '../Assets/images/zumba.jpeg'
import Aerobics from '../Assets/images/Aerobics.jpeg'
import Personal_training from "../Assets/images/Personal Training.jpeg"
import cycling from '../Assets/images/cycling.jpeg'
import crossfit from '../Assets/images/crossfit.jpeg'
import pyscotherpy from '../Assets/images/psycotherpy.jpeg'
import spinning from '../Assets/images/spinning.jpeg'
import kickboxing from '../Assets/images/kickboxing.jpeg'
const Services = ({ randomData, index }) => {

 const service_images = {
  "Cardio": cardio, "Weight loss": weight_loss, "Yoga": yoga, "Zumba": zumba, "Aerobics": Aerobics, "Personal Training": Personal_training, "Cycling": cycling, "CrossFit": crossfit, "Physiotherapy": pyscotherpy, "Spinning": spinning, "Kickboxing": kickboxing
 }
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
       <img src={service_images[service.name]} alt="" width={250} height={200} />
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