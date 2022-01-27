import logo from "../assets/syncee-logo-300px.png";

function LoginHeader() {
  return (
    <header className="login-header">
      <img className="logo" src={logo} alt="syncee logo" />
      <div className="text-box">
        <h2>Login</h2>
        <p>See your grwoth and get consulting support!</p>
      </div>
    </header>
  );
}

export default LoginHeader;
