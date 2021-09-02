import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Rockets from "./Rockets";
import Dragons from "./Dragons"
import NotFound from "./NotFound";
// import backgroundImage from "./images/spacex-Ptd-iTdrCJM-unsplash.jpg"


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <div className="container">
            <div className="layer">
              <Navbar />             
              <Switch>
                <Route exact path="/">
                  <Home />               
                </Route>
                <Route path="/rockets">
                  <Rockets />
                </Route>
                <Route path="/dragons">
                  <Dragons />
                </Route>
                <Route path="*" >               
                  <NotFound />
                </Route>
              </Switch>           
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
