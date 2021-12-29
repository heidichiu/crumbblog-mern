import "./topbar.css";

export const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Contact</li>
          <li className="top-list-item">Create Post</li>
          <li className="top-list-item">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img className="top-image" src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg" alt="" />
        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};
