// PrivateRoute.js
import React from 'react';
import { Navigate} from 'react-router-dom';

function PrivateRoutes({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return !isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoutes;
