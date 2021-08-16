import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Rockets from "./Rockets";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/rockets">
              <Rockets />
            </Route>
          </Switch>       
        </div>
      </div>
    </Router>
  );
}

export default App;
