import React from 'react'
import data from '../../data.json'
import './services.css'
const Services = () => {
 const ser_data = data.services
 return (
  <div className='serviceswrapper'>
   <h1>xyz fitness center</h1>
   <ul className='serviceslist'>
    {ser_data.map((services) => (
     <li className='item'>
      <img src="https://wallpaperaccess.com/full/804876.jpg" width={150} height={150} alt="" />
      {services.name}
      <button className="addToCartButton">
       Add to Cart
      </button>
     </li>

    ))}
   </ul >
  </div>

 )
}

export default Services