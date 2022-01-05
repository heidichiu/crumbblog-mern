import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/header/Header";
import { Posts } from "../../components/posts/Posts";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  let parameter;
  let value;
  if (search.includes("?username")) {
    parameter = "Author";
    value = new URLSearchParams(window.location.search).get("username");
  } else if (search.includes("category")) {
    parameter = "Category";
    value = new URLSearchParams(window.location.search).get("category");
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      {search && (
        <div className="home-search-title">
          Search results ({parameter}: {value})
        </div>
      )}
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};
