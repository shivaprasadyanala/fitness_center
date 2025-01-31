import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Services from '../Services/Services'
import { Link } from "react-router-dom"; // Import Link for React Router
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import './NearbyFitnessCenters.css'; // Import the updated CSS file
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
import data from '../../data.json'
import { cartContext } from '../MyRoutes/MyRoutes';
// Import other images as needed
const UserListing = ({ latitude, longitude }) => {
  const [centers, setCenters] = useState([]);
  const [filteredCenters, setFilteredCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [radius, setRadius] = useState(1000); // Default radius in meters
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [centersPerPage] = useState(5); // Display only 5 centers per page
  const [clickedIndex, setClickedIndex] = useState(); // State to show/hide services
  const { cartItems } = useContext(cartContext)
  const servicedata = data.services;
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
  const prices = [12500, 1230, 5000, 4000, 3200, 1200, 4490, 8700, 1300, 5000]
  const getRandomValues = () => {
    const randomValues = [];
    while (randomValues.length < 10) {
      const randomIndex = Math.floor(Math.random() * servicedata.length);
      const randomPriceIndex = Math.floor(Math.random() * prices.length);
      if (!randomValues.includes(servicedata[randomIndex])) {
        const service = servicedata[randomIndex]
        service.price = prices[randomPriceIndex]
        randomValues.push(service);
      }
    }
    return randomValues.slice(0, 5);
  };
  const [randomData, setRandomData] = useState([])
  useEffect(() => {
    setRandomData(getRandomValues(servicedata))
  }, [clickedIndex])
  // console.log(randomData);
  useEffect(() => {
    const fetchNearbyCenters = async () => {
      const apiKey = '03f6e19719msh1a6a4ca1b9ec984p10139djsndf2ad0f8bb84'; // Replace with your RapidAPI Key

      const url = `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${latitude},${longitude}&type=gym&radius=${radius}&language=en`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.get(url, options);
        const result = response.data;
        console.log('API Response:', result); // Log the API response
        const apiResults = result['results'];
        setCenters(apiResults);
      } catch (error) {
        console.error('Error fetching nearby centers:', error);
      }
    };
    fetchNearbyCenters();
  }, [latitude, longitude, radius]); // Include radius in dependencies
  console.log(centers);
  useEffect(() => {
    setFilteredCenters(
      centers.filter((center) =>
        center.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [centers, searchTerm]);

  const handleRadiusChange = (event) => {
    setRadius(Number(event.target.value)); // Convert value to number
  };




  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Pagination logic
  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
  const currentCenters = filteredCenters.slice(indexOfFirstCenter, indexOfLastCenter);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top when changing pages
  };
  const naviage = useNavigate()
  const handleServiceClick = (index, randomData, serviceName) => {
    naviage('/services', { state: { index: index, randomData: randomData, serviceName: serviceName } })
  }

  return (
    <div className="container">
      <h2 className="heading">Nearby Fitness Centers</h2>
      <div className='headerContainer'>
        <div className="searchContainer">
          <input
            type="text" className='searchInput'
            placeholder="Search by center name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="searchButton">Search</button>
        </div>
        {/* Cart */}
        <Link to="/cart" className="cartIconContainer">
          <FaShoppingCart className="cartIcon" />
          {cartItems.services.length > 0 && <span className="cartItemCount">{cartItems.services.length}</span>}
        </Link>
        <div className="radiusSelector">
          <label htmlFor="radius">Select Radius:</label>
          <select id="radius" value={radius} onChange={handleRadiusChange}>
            <option value={100}>100 meters</option>
            <option value={500}>500 meters</option>
            <option value={1000}>1 kilometer</option>
            <option value={5000}>5 kilometers</option>
            <option value={10000}>10 kilometers</option>
            <option values={20000}>20 kilometers</option>
          </select>
        </div>
      </div >
      {currentCenters.length > 0 ? <ul className="centerList">
        {currentCenters.map((center, index) => (
          <li key={index} className="centerItem">
            <img src={images[index]} alt={center.name} className="centerImage" />
            <div className="centerInfo">
              <strong>{center.name}</strong>
              <p>Address: {center.address}</p>
              <div className="servicesButtonContainer">
                <button className="servicesButton" onClick={() => handleServiceClick(index, randomData, center.name)}>
                  show services
                </button>
              </div>

            </div>
          </li>
        ))}
      </ul> : <div className='loader-container'><div className='loader'></div></div>}
      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCenters.length / centersPerPage) }, (_, i) => i + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber)} className="pageButton">
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserListing;
