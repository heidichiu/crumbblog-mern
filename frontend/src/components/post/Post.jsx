import { Link } from "react-router-dom";
import "./post.css";

export const Post = ({ post }) => {
  return (
    <div className="post">
      {post.image && <img src={post.image} alt="" className="post-image" />}
      <div className="post-info">
        <div className="post-categories">
          {post.categoris && post.categoris.map((c) => <span className="post-category">{c.name}</span>)}
        </div>

        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="post-description">{post.description}</p>
    </div>
  );
};
