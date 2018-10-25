import React, { Component } from "react";
import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./Signup.css";
import {Redirect} from "react-router-dom";
class Signup extends Component{
    constructor(props) {
        super(props);
    this.state = {
        showLogin: false,
        
        username: "",
        email: "",
        password: ""
      }
    }
    onClickLogin(e){
      e.preventDefault();
      this.setState({showLogin: !this.state.showLogin})
    }
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
    handleSubmit = event => {
      event.preventDefault();
    }
render() {
    return (
        
        <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username">
              <ControlLabel>Full name: </ControlLabel>
              <FormControl
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Enter your name here..."></FormControl>
          </FormGroup>
                
        
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Signup
          </Button>
          <Button className="button" type="submit" onClick={this.onClickLogin.bind(this)}>Login
          {this.state.showLogin && <Redirect to={{
            pathname: '/login'
          }} />}</Button>
        </form>
            
        </div>
    );
}
}
export default Signup;