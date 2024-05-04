import axios from 'axios';
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./Authcontext";

const Callback = () => {
    const { checkLoginState, authenticated,GoogleLogin } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
      (async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code'); // Extract the code
        console.log(searchParams);
        console.log(code);
        if (!code) {
          console.warn('Authorization code is missing in the redirect URL');
          navigate('/'); // Redirect if no code
          return;
        }
  
        if (authenticated === false) {
          try {
            console.log('Exchanging code for token...');
            const res = await axios.get(
              `https://o-auth-adan.vercel.app/auth/token?code=${code}`,
              { withCredentials: true }
            );
  
            console.log('Token exchange response:', res.data);
            checkLoginState(); // Notify AuthContext to update login state
           
            console.log('Navigating to home page...');
            navigate('/Student'); // Redirect to the home page after successful token exchange
          } catch (err) {
            console.error('Error during token exchange:', err.message);
            console.error('Error details:', err.response?.data);
            navigate('/'); // Redirect to home if there's an error
          }
        }
      })();
    }, [checkLoginState, authenticated, navigate]);
    
    return null; // This component doesn't render any UI
  };
  

export default Callback;
