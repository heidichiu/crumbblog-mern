import { Header } from "../../header/Header";
import { Posts } from "../../posts/Posts";
import { Sidebar } from "../../sidebar/Sidebar";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};
