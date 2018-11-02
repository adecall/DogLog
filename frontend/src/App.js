import React, {Component} from "react";
import Body from "./components/Body";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Animalinfo from "./components/Animalinfo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Panel} from "react-bootstrap";
import AddRating from './components/AddRating';
import Footer from "./components/Footer";
// simport Contact from "./components/Contact";
// import Map from "./components/Map"
class App extends Component {
  render(){
    return(
      <div>
     
  <Panel.Body>
  <Body />
  <Router>
  <div>
  
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/animals" component={Animalinfo} />
    <Route path="/addrating" component={AddRating} />
  </div>
  </Router>
  
  {/*<Results /> */}
  </Panel.Body>
  <Panel.Footer><Footer  /></Panel.Footer>

     
      </div>
      
    )
  }
}
export default App;