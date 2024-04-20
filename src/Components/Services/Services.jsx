import React, { useContext } from 'react'
import data from '../../data.json'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './services.css'
import Cart from '../Cart/Cart'
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
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
import { cartContext } from '../MyRoutes/MyRoutes'
const Services = ({ randomData, index }) => {

 const service_images = {
  "Cardio": cardio, "Weight loss": weight_loss, "Yoga": yoga, "Zumba": zumba, "Aerobics": Aerobics, "Personal Training": Personal_training, "Cycling": cycling, "CrossFit": crossfit, "Physiotherapy": pyscotherpy, "Spinning": spinning, "Kickboxing": kickboxing
 }
 // const [cartItems, setCartItems] = useState([]);

 const { cartItems, addToCart, removeFromCart } = useContext(cartContext)

 const ser_data = data.services
 const location = useLocation();
 console.log(cartItems.services.length);
 return (
  <div className='serviceswrapper'>
   <Link to="/cart" className="cartIconContainerServices">
    <FaShoppingCart className="cartIcon" />
    {cartItems.services.length > 0 && <span className="cartItemCount">{cartItems.services.length}</span>}
   </Link>
   <div >
    <h1 className='serviceheader'>{location.state.serviceName}</h1>
    <ul className='serviceslist'>
     {location.state.randomData && location.state.randomData.map((service, index) => (

      <li key={index} className='serviceitem'>
       <img src={service_images[service.name]} alt="" width={250} height={200} />
       <p>{service.name}</p>
       <button className="addToCartButton" onClick={() => addToCart(service.name, location.state.serviceName)}>
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