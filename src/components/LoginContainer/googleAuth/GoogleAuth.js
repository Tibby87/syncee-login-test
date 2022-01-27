import { useContext } from "react";
import GoogleLogin from "react-google-login";
import LoginContext from "../../../context/LoginContext";
import googleIcon from "../assets/google_icon.png";

function GoogleAuth() {
  // Get State Variables From Context
  const { setProfile } = useContext(LoginContext);
  // Handle response from google auth request
  const responseGoogle = async (response) => {
    if (response.profileObj)
      setProfile(JSON.stringify(response.profileObj, null, 2));
  };

  return (
    <GoogleLogin
      clientId="1059283852213-5117tts7nkaq535lbut8a688e33h29eh.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          className="btn-google"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img className="g-icon" src={googleIcon} alt="" />
          Sign in with Google
        </button>
      )}
      buttonText="Login With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleAuth;
