import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-lg">CrumbBlog</span>
        <span className="header-title-sm">A place to share your life</span>
      </div>
      <img
        className="header-image"
        src="https://images.pexels.com/photos/5727715/pexels-photo-5727715.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
    </div>
  );
};
