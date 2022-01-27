import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import { Link } from "react-router-dom";

function UserPage() {
  const { email, setEmail, setPassword } = useContext(LoginContext);
  return (
    <main className="user-page">
      <h1>
        Welcome to our site, <span className="user-email">{email}</span>!
      </h1>
      <h2
        onClick={() => {
          setEmail("");
          setPassword("");
        }}
        className="back-to"
      >
        <Link to="/">Back to Login Page</Link>
      </h2>
    </main>
  );
}

export default UserPage;
