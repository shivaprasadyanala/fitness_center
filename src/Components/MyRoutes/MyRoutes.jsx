import React, { useEffect, useState, useContext, createContext } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Welcome from '../WelcomePage/Welcome';
import Signup from '../SignupForm/Signup';
import UserListing from '../UserListing/UserListing';
import GetLocation from '../GetLocation/GetLocation';
import Cart from '../Cart/Cart';
import Services from '../Services/Services';
import Protected_route from '../Protected_route';
export const cartContext = createContext()
export const loginContext = createContext()
const MyRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
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

  const addToCart = (item, price, centername, showAlert) => {
    if (centername === cartItems.centername || cartItems.centername === "") {

      if (!cartItems.services.includes(item)) {
        if (cartItems.centername === "") {
          cartItems.centername = centername
        }
        if ((centername === cartItems.centername)) {
          setCartItems(prevState => ({
            ...prevState,
            services: [...prevState.services, { item: item, price: price }]
          }));
          if (showAlert === true)
            alert(`${item} added to cart`);
        }
      } else {
        alert(`${!cartItems.services.includes(item)} already ${centername === "" || centername === cartItems.centername} in the cart`)
      }

    } else {
      console.log(item);
      setCartItems({ centername: centername, services: [{ item: item, price: price }] });
    }

  };
  // console.log(cartItems);

  // useEffect(() => {
  //   const storedStatus = localStorage.getItem('isLoggedIn');
  //   setIsLoggedIn(storedStatus === 'true');
  // }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    // localStorage.setItem('isLoggedIn', status.toString());
  };
  console.log(`login status:  ${isLoggedIn}`);
  return (
    <cartContext.Provider value={{ cartItems, removeFromCart, addToCart }}>
      <Routes>
        {/* <Route path="/" element={<Welcome />} />
        <Route path="/services" element={<Protected_route isLoggedIn={isLoggedIn}> <Services /> </Protected_route>} />
        <Route path="/getlocation" element={<GetLocation />} />
        <Route path="/userlisting" element={<UserListing />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} ></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/services' element={<Services />} /> */}
        {/* <Routes> */}
        <Route element={<Protected_route isLoggedIn={isLoggedIn} />}>
          <Route element={<GetLocation onLogin={handleLogin} />} path="/getlocation" exact />
        </Route>
        {!isLoggedIn ?
          (<Route element={<LoginForm onLogin={handleLogin} />} path="/login" />) : (<Route path='/' element={<Welcome />} />)}
      </Routes>
      {/* </Routes> */}
    </cartContext.Provider>
  );
};

export default MyRoutes;
