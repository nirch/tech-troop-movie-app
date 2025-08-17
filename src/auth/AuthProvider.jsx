import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(
    localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Read from local Storage only after mount
  //   if (localStorage.getItem("activeUser")) {
  //     setActiveUser(localStorage.activeUser);
  //   }
  // }, []);

  useEffect(() => {
    // Write to local Storage  on each change of active user
    if (localStorage.activeUser !== activeUser) {
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
  }, [activeUser]);

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
