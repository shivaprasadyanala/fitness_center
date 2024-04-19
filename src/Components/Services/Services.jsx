import React from 'react'
import data from '../../data.json'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './services.css'
import Cart from '../Cart/Cart'
import image1 from '../Assets/images/image1.jpg';
import image2 from '../Assets/images/image2.jpg';
import image3 from '../Assets/images/image3.jpg';
import image4 from '../Assets/images/image4.jpg';
import image5 from '../Assets/images/image5.jpg';
import image6 from '../Assets/images/image6.jpg';
import image7 from '../Assets/images/image7.jpg';
import image8 from '../Assets/images/image8.jpg';
import image9 from '../Assets/images/image9.jpg';
import image10 from '../Assets/images/image10.jpg';
import image11 from '../Assets/images/image11.jpg';
import image12 from '../Assets/images/image12.jpg';
import image13 from '../Assets/images/image13.jpg';
import image14 from '../Assets/images/image14.jpg';
import image15 from '../Assets/images/image15.jpg';
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
 const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
 return (
  <div className='serviceswrapper'>
   {cartItems && <Cart length={cartItems.length} services={cartItems} removeFromCart={removeFromCart} />
   }

   <div >
    <h1 className='serviceheader'>{location.state.serviceName}</h1>
    <ul className='serviceslist'>
     {location.state.randomData && location.state.randomData.map((service, index) => (

      <li key={index} className='serviceitem'>
       <img src={images[0]} alt="" />
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