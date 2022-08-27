import React, { createContext, useState } from "react";
import getData from "../Components/api";
export const AuthContext = createContext();
const initState = {
  isAuth: false,
  token: null
};
export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [state, setState] = useState(initState);

  const handleLogin = () => {
    setState({
      ...initState,
      isAuth: true,
      token: "QpwL5tke4Pnpja7X4"
    });
  };
  const login = (username, password) => {
    if (username && password) {
      setAuth(true);
      console.log(getData);
      handleLogin();
    }
  };

  const logout = () => {
    setAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
