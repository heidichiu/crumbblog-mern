import "./post.css";

export const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/5469811/pexels-photo-5469811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="post-image"
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>

        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nihil impedit qui velit tenetur aperiam labore
        repellendus ab, sit sunt saepe molestias nostrum quia corporis nesciunt odit. Vero esse praesentium placeat quae
        asperiores at omnis autem ut maxime harum! Debitis fuga nihil corrupti aut, distinctio, nesciunt, similique ipsa
        repellendus consequuntur molestias quis rerum eius esse provident!
      </p>
    </div>
  );
};
