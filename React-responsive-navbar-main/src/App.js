import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {Menu} from "./components/Pages/Menu";
import {WhoWeAre} from "./components/Pages/WhoWeAre";
import {Buy} from "./components/Pages/Buy";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/whoweare" component={WhoWeAre} />
            <Route path="/buy" component={Buy} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
