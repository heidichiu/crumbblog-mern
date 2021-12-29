import { Home } from "./pages/home/Home";
import { TopBar } from "./components/topbar/TopBar";
import { Single } from "./pages/single/Single";
import { CreatePost } from "./components/createpost/CreatePost";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/createpost">{user ? <CreatePost /> : <Home />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Home />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
