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
  const [cartItems, setCartItems] = useState([])
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

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
