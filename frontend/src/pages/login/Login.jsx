import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" action="">
        <label htmlFor="email-input">Email: </label>
        <input className="login-input" type="text" placeholder="Enter your email" id="email-input" />
        <label htmlFor="password-input">Password: </label>
        <input className="login-input" type="password" placeholder="Enter your password" id="password-input" />
        <button className="login-register-button">Login</button>
        <button className="register-button">Register</button>
      </form>
    </div>
  );
};
