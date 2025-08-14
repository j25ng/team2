import React from "react";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
