import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <span className="loading loading-dots loading-xl text-orange-500"></span>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
  }
};

export default PrivateRouter;
