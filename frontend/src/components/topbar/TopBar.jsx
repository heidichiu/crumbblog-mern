import { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../context/authContext/authActions";
import { AuthContext } from "../../context/authContext/authContext";
import "./topbar.css";

export const TopBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/createpost">
              Create Post
            </Link>
          </li>
          <li className="top-list-item" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img className="top-image" src={user.profilePic} alt="" />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};
