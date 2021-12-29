import { Home } from "./pages/home/Home";
import { TopBar } from "./components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import { CreatePost } from "./components/createpost/CreatePost";

function App() {
  return (
    <>
      <TopBar />
      <CreatePost />
    </>
  );
}

export default App;
