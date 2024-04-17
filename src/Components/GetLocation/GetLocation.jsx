import React, { useEffect, useState } from 'react'
import UserListing from '../UserListing/UserListing';
const GetLocation = () => {
 const [latitude, setLatitude] = useState(null);
 const [longitude, setLongitude] = useState(null);
 const [error, setError] = useState(null);
 console.log(latitude, longitude);
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
    <UserListing latitude={latitude} longitude={longitude} />
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