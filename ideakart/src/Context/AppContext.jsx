import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    isAuth: false,
  });

  const handleLogin = () => {
    setState({
      ...state,
      isAuth: true,
    });
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setState({
      ...state,
      login: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{ state, setState, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
