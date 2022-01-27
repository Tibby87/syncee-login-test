import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../../context/LoginContext";

function LoginForm() {
  // Import State From Context
  const { email, handleEmail, password, handlePassword } =
    useContext(LoginContext);

  // Set up navigate for navigating to user page
  const navigate = useNavigate();

  // Handle Form Submission And Redirect To New Page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  // Set custom message in case of invalid input values
  const handleInvalid = (e) => {
    if (e.target.type === "email") {
      e.target.setCustomValidity(`Please provide a valid email format,
      e.g, yourname@youremail.com
      `);
    }
    if (e.target.type === "password") {
      e.target.setCustomValidity(
        `Your password has to contain min. 5 characters,
         including at least one uppercase and one lowercase letter.`
      );
    }
  };

  return (
    <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
      {/* Email Input */}
      <div className="form-group">
        <label className="login-label" htmlFor="email">
          Email*
        </label>
        <input
          type="email"
          required
          className="login-input"
          placeholder="example@email.com"
          id="email"
          onChange={handleEmail}
          onInvalid={handleInvalid}
          value={email}
          title="Has To Be Valid Email Format"
        />
      </div>
      {/* Password Input */}
      <div className="form-group">
        <label className="login-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          onChange={handlePassword}
          value={password}
          minLength="5"
          pattern="(?=.*[a-z])(?=.*[A-Z]).{5,}"
          onInvalid={handleInvalid}
          required
          className="login-input"
          placeholder="Min. 5 characters"
        />
      </div>
      {/* Checkbox & Forgotten Password Link */}
      <div className="form-group--flex">
        <div className="form-group--remember">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#" className="form-link">
          Forget Password?
        </a>
      </div>
      {/* Login Button */}
      <button className="btn btn-login" type="submit">
        Login
      </button>
      <span className="form-link">
        Not registered yet? <a href="#">Create an Account</a>{" "}
      </span>
    </form>
  );
}

export default LoginForm;
