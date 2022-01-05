import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";
import "./login.css";
import { login } from "../../context/authContext/apiCalls";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { isFetching, dispatch } = useContext(AuthContext);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login({ email, password }, dispatch);
  // };
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" action="">
        <label htmlFor="email-input">Email: </label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter your email"
          id="email-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password-input">Password: </label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
          id="password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button className="login-button" onClick={handleLogin} disabled={isFetching}>
          Login
        </button> */}
        <button className="login-register-button">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};
