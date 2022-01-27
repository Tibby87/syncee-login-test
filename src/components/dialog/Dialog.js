import { useEffect, useContext } from "react";
import LoginContext from "../../context/LoginContext";

function Dialog() {
  // Get state from context
  const { profile, setProfile } = useContext(LoginContext);

  // Show dialog when profile state gets updated
  useEffect(() => {
    document.querySelector("dialog") && document.querySelector("dialog").show();
  }, [profile, setProfile]);
  console.log(profile);
  // Close dialog box and delete profile from state on button click
  const handleClose = () => {
    document.querySelector("dialog") &&
      document.querySelector("dialog").close();
    setProfile(null);
  };

  return (
    <div>
      {profile !== null && (
        <dialog open className="dialog-box">
          <h3>User Data:</h3>
          <pre>{profile}</pre>
          <button className="btn-close" onClick={handleClose}>
            Close Dialog
          </button>
        </dialog>
      )}
    </div>
  );
}

export default Dialog;
