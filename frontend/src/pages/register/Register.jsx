import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (username === "" || email === "" || password === "") {
      setError(true);
      setErrorMessage("Please complete all fields");
      return;
    }
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      setRegistrationCompleted(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      {registrationCompleted ? (
        <>
          Registration successful. You can login now.
          <button className="register-login-button">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </>
      ) : (
        <>
          <span className="register-title">Register</span>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="reg-uesrname-input">Username: </label>
            <input
              className="register-input"
              type="text"
              placeholder="Enter your username"
              id="reg-uesrname-input"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email-input">Email: </label>
            <input
              className="register-input"
              type="text"
              placeholder="Enter your email"
              id="email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password-input">Password: </label>
            <input
              className="register-input"
              type="password"
              placeholder="Enter your password"
              id="password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="register-button" type="submit">
              Register
            </button>
            <button className="register-login-button">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>{errorMessage}</span>}
          </form>
        </>
      )}
    </div>
  );
};
