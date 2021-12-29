import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" action="">
        <label htmlFor="reg-uesrname-input">Username: </label>
        <input className="register-input" type="text" placeholder="Enter your username" id="reg-uesrname-input" />

        <label htmlFor="email-input">Email: </label>
        <input className="register-input" type="text" placeholder="Enter your email" id="email-input" />
        <label htmlFor="password-input">Password: </label>
        <input className="register-input" type="password" placeholder="Enter your password" id="password-input" />
        <button className="register-button">Register</button>
        <button className="register-login-button">
          {" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};
