import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  // Define State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  //  Store Email Address In State
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.setCustomValidity("");
  };

  // Store Password In State
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.setCustomValidity("");
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        profile,
        setProfile,
        setEmail,
        setPassword,
        handleEmail,
        handlePassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
