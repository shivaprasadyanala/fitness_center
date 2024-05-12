import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const Protected_route = ({ isLoggedIn }) => {
 return (
  isLoggedIn ?
   <Outlet /> :
   <Navigate to="/login" />
 )
}

export default Protected_route