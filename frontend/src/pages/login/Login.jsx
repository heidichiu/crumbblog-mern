import { Link } from "react-router-dom";
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
        <button className="login-button">Login</button>
        <button className="login-register-button">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};
