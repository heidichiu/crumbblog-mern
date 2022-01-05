import { Post } from "../post/Post";
import "./posts.css";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts && posts.length > 0 ? posts.map((p) => <Post post={p} />) : <span className="no-post-found">No post found</span>}
    </div>
  );
};
