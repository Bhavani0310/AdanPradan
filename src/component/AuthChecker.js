import { useEffect } from "react";
import { useAuth } from "./Authcontext"; // Your AuthContext hook
import { useNavigate } from "react-router-dom";

const AuthChecker = ({ children }) => {
  const { authenticated, checkLoginState } = useAuth(); // From your AuthContext
  const navigate = useNavigate(); // React Router's navigation hook

  useEffect(() => {
    const checkAuthStatus = async () => {
      await checkLoginState(); // Check login state from server
      
      if (authenticated) {
        navigate("/Student"); // Redirect to /Student if authenticated
      } else {
        navigate("/"); // Redirect to login if not authenticated
      }
    };

    checkAuthStatus(); // Perform the check when the component is mounted
  }, [authenticated, checkLoginState, navigate]); // Dependencies include all variables used in the effect

  return null; // This component doesn't render anything directly
};

export default AuthChecker;
