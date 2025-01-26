import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
  const {
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();
  // const isAuthenticated = false;

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      return logout
    } else {
      // TODO: Add Redirect functionality here:
      return loginWithRedirect
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};