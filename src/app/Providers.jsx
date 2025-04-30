'use client';  

import { Auth0Provider } from '@auth0/auth0-react';
import { ProvideAppContext } from '../context/AppContext.jsx';
import {useState, useEffect} from "react"

const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH_CLIENT_ID;

export function Providers({ children }) {
  const [redirectUri, setRedirectUri] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUri(window.location.origin);
    }
  }, []);

  if (!redirectUri) {
    // Or show a loading spinner, or just return null briefly
    return null;
  }

  // console.log(redirectUri);
  
  
  return (
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: 'https://dev-1zaqg1n564e6azll.us.auth0.com/api/v2/'
      }}
    >
      <ProvideAppContext>
        {children}
      </ProvideAppContext>
    </Auth0Provider>
  );
}
