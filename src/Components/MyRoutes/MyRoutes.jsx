import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Link, Routes, Outlet } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import Welcome from '../WelcomePage/Welcome'
import Signup from '../SignupForm/Signup'
import UserListing from '../UserListing/UserListing'
import GetLocation from '../GetLocation/GetLocation'
import Cart from '../Cart/Cart'
const MyRoutes = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false)
 const handleLogin = (status) => {
  setIsLoggedIn(status)
 }
 useEffect(() => {
  setIsLoggedIn(localStorage.getItem(isLoggedIn))
 })
 return (
  < Router >
   <Routes>
    <Route path='/login' element={<LoginForm onLogin={handleLogin} />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/' element={<Welcome />} />
    <Route path='/userlist' element={<UserListing />} />
    <Route path='/getlocation' element={<GetLocation />} />
    <Route path='/cart' element={<Cart />} />
   </Routes>
  </Router >
 )
}

export default MyRoutes