import { useContext } from "react";
import { Link } from "react-router-dom";
import { hostUrl } from "../../api";
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
      <div className="top-left">CrumbBlog</div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              Home
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
          <Link to="/settings" className="link">
            <img className="top-image" src={`${hostUrl}images/${user.profilePic}`} alt="" />
          </Link>
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
