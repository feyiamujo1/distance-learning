import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/UseAuth'

const ProtectedRoutes = () => {
  const location = useLocation();
  const { auth } = useAuth();
  
  return  auth?.token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace/>
}

export default ProtectedRoutes