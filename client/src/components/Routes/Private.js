import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

// Import API_URL from environment variables
const API_URL = process.env.REACT_APP_API;

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        // Use the API_URL for the backend request
        const res = await axios.get(`${API_URL}/api/v1/auth/user-auth`);
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false); // Set ok to false in case of an error
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
