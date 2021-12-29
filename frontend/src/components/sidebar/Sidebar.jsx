import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati inventore repellat maxime voluptates
          veniam, facilis tempora at soluta accusamus voluptate quae, labore quam eaque vero eveniet similique ullam dolor.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};
