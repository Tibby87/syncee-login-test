function LoginFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="login-footer">
      <p>{currentYear} Syncee, All rights reserved</p>
    </footer>
  );
}

export default LoginFooter;
