import React, {Component} from "react";
import Body from "./components/Body";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Animalinfo from "./components/Animalinfo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Panel} from "react-bootstrap";
import AddRating from './components/AddRating';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
class App extends Component {
  render(){
    return(
      <div>
     
  <Panel.Body>
  <Body />
  <Router>
  <div>
  
    <Route  path="/signup" component={Signup} />
    <Route  path="/login" component={Login} />
    <Route  path="/animals" component={Animalinfo} />
    <Route path="/addrating" component={AddRating} />
    
  </div>
  </Router>
  
  {/*<Results /> */}
  </Panel.Body>
  <Panel.Footer><Footer /></Panel.Footer>

     
      </div>
      
    )
  }
}
export default App;