import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setTimeout(() => {
      setActiveUser("john");
      navigate("/movies");
    }, 1000);
  };

  const handleLogout = () => {
    setActiveUser(null);
    navigate("/");
  };

  return (
    <AuthContext
      value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext>
  );
}

export const useAuth = () => useContext(AuthContext);
