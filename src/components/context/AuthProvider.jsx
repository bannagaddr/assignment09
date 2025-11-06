import React, { useEffect, useState } from "react";
// 1st
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // 2nd
  const authData = {
    user,
    setUser,
  };

  // 3rd
  return <AuthContext value={authData}>{children}</AuthContext>;

  // 4th wrap router with AuthContext
  // 5th use this context
};

export default AuthProvider;
