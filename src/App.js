import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
