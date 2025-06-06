// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const AuthGuard = ({ children }) => {
//  const isAuthenticated = Boolean(sessionStorage.getItem('Token')); 
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return children;
// };

// export default AuthGuard;

export default AuthGuard;
import jwtDecode from 'jwt-decode';
const AuthGuard = ({ children }) => {
  const token = sessionStorage.getItem('Token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; 
    if (decoded.exp < currentTime) {
      sessionStorage.removeItem('Token');
      return <Navigate to="/login" replace />;
    }
    return children;
  } catch (error) {
    sessionStorage.removeItem('Token');
    return <Navigate to="/login" replace />;
  }
};
