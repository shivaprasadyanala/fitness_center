import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Welcome from '../WelcomePage/Welcome';
import Signup from '../SignupForm/Signup';
import UserListing from '../UserListing/UserListing';
import GetLocation from '../GetLocation/GetLocation';
import Cart from '../Cart/Cart';
import Services from '../Services/Services';

const MyRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedStatus === 'true');
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status.toString());
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/userlist" element={<UserListing />} />
      <Route path="/getlocation" element={<GetLocation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default MyRoutes;
