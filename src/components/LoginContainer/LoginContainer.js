import LoginForm from "./form/LoginForm";
import LoginHeader from "./loginHeader/LoginHeader";
import GoogleAuth from "./googleAuth/GoogleAuth";
import SeparatorText from "./separatorText/SeparatorText";
import LoginFooter from "./loginFooter/LoginFooter";

function LoginContainer() {
  return (
    <div className="login-container">
      <LoginHeader />
      <GoogleAuth />
      <SeparatorText />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

export default LoginContainer;
