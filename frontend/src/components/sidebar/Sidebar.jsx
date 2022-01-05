import axios from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">Top Categories</span>
        <ul className="sidebar-list">
          {cats.map((c) => (
            <Link to={`/?category=${c.name}`} className="link">
              <li className="sidebar-list-item">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
