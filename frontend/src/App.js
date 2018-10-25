import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components 
import DogList from './components/DogList';
import AddRating from './components/AddRating';
import VolunteersList from './components/GetVolunteers'
import Body from "./components/Body";
import Login from "./components/Login"
import Signup from "./components/Signup";
import AddRatings from "./components/AddRatings";
// import Jumbotron from "./components/Css",  Redirect, withRouter
import { BrowserRouter as Router, Route} from "react-router-dom"

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
class App extends Component {
  
   
  render() {
    return (
      <div>
      <Body />
      <Router>
      <div>
      
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/addrating" component={AddRating} />
      </div>
      </Router>
      <ApolloProvider client={client}>
      <div id="main">
        <h1> Dog List</h1>
        <DogList />
        <AddRatings />
        <VolunteersList />
      </div>
    </ApolloProvider>
      
      </div>
     
      
    );
  }
}


export default App;
