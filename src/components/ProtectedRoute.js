// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';  // Updated to Navigate

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Replaced Redirect with Navigate
  }

  return <Outlet />;  // Used Outlet to render child routes
};

export default ProtectedRoute;
