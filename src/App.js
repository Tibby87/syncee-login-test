import { Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/User/UserPage";
import Dialog from "./components/dialog/Dialog";

function App() {
  return (
    <LoginProvider>
      <Dialog />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
