import React, { useEffect, useState, useContext, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Welcome from '../WelcomePage/Welcome';
import Signup from '../SignupForm/Signup';
import UserListing from '../UserListing/UserListing';
import GetLocation from '../GetLocation/GetLocation';
import Cart from '../Cart/Cart';
import Services from '../Services/Services';
export const cartContext = createContext()
const MyRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState({ centername: "", services: [] })
  const removeFromCart = (index) => {
    const newCartItems = [...(cartItems.services)];
    newCartItems.splice(index, 1);
    // setCartItems.services(newCartItems);
    setCartItems(prevState => ({
      ...prevState,
      services: newCartItems
    }));
  };

  console.log(cartItems.centername);

  const addToCart = (item, centername) => {
    if (centername === cartItems.centername || cartItems.centername === "") {

      if (!cartItems.services.includes(item)) {
        if (cartItems.centername === "") {
          cartItems.centername = centername
        }
        if ((centername === cartItems.centername)) {
          setCartItems(prevState => ({
            ...prevState,
            services: [...prevState.services, item]
          }));
          alert(`${item} added to cart`);
        }
      } else {
        alert(`${!cartItems.services.includes(item)} already ${centername === "" || centername === cartItems.centername} in the cart`)
      }

    } else {
      setCartItems({ centername: centername, services: [item] });
    }

  };


  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedStatus === 'true');
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status.toString());
  };

  return (
    <cartContext.Provider value={{ cartItems, removeFromCart, addToCart }}>
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/userlist" element={<UserListing />} />
        <Route path="/getlocation" element={<GetLocation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </cartContext.Provider>
  );
};

export default MyRoutes;
