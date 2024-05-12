import React, { useEffect, useState, useContext } from 'react'
import UserListing from '../UserListing/UserListing';

const GetLocation = () => {
 const [latitude, setLatitude] = useState(null);
 const [longitude, setLongitude] = useState(null);
 const [cartItems, setCartItems] = useState([])
 const [error, setError] = useState(null);
 console.log(latitude, longitude);
 // const headers = {
 //  'Content-Type': 'application/json',
 //  'Access-Control-Allow-Origin': '*',
 //  'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET'
 // }

 useEffect(() => {
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(
    (position) => {
     setLatitude(position.coords.latitude);
     setLongitude(position.coords.longitude);
    },
    (error) => {
     setError(error.message);
    }
   );
  } else {
   setError('Geolocation is not supported by this browser.');
  }
 }, []);

 return (
  <div>
   {latitude && longitude ? (
    <div> <h1>in get location</h1></div>
   ) : error ? (
    <p>Error: {error}</p>
   ) : (
    <p>Loading...</p>
   )
   }
  </div >
 );
}

export default GetLocation