// import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     isAuth: false,
//   });

//   const handleLogin = () => {
//     setState({
//       ...state,
//       isAuth: true,
//     });
//     navigate("/dashboard");
//   };

//   const handleLogout = () => {
//     setState({
//       ...state,
//       login: false,
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{ state, setState, handleLogin, handleLogout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth(!isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
