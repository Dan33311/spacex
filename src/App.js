import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Rockets from "./Rockets";
// import backgroundImage from "./images/spacex-Ptd-iTdrCJM-unsplash.jpg"


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <div className="container">
              <div className="layer">
                <Route exact path="/">
                  <Navbar />
                  {/* <Home /> */}
                </Route>
              </div>
            </div>
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
