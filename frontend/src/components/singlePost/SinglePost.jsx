import { useContext, useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import axios from "../../api";
import "./singlePost.css";
import { hostUrl } from "../../api";
import { AuthContext } from "../../context/authContext/authContext";

export const SinglePost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(AuthContext);
  let history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + postId);
      history.push("/");
    } catch (err) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + postId);
      setPost(res.data);
    };
    getPost();
  }, [postId]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.image && <img src={`${hostUrl}images/${post.image}`} alt="" className="single-post-image" />}
        <h1 className="single-post-title">
          {post.title}
          {post.username === user?.username && (
            <div className="single-post-edit-container">
              <i className="single-post-icon far fa-edit"></i>
              <i className="single-post-icon fas fa-trash" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author:
            <Link to={`/?username=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            Date: <b>{new Date(post.createdAt).toDateString()}</b>
          </span>
        </div>
        <p className="single-post-description">{post.description}</p>
      </div>
    </div>
  );
};
