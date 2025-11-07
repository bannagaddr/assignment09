import React, { useEffect, useState } from "react";
// 1st
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // 2nd
  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    updateUser,
  };

  // 3rd
  return <AuthContext value={authData}>{children}</AuthContext>;

  // 4th wrap router with AuthContext
  // 5th use this context
};

export default AuthProvider;
