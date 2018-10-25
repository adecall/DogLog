import React, { Component } from "react";
import {Form, FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
class Signup extends Component{
    constructor() {
        super();
    this.state = {
        showLogin: false,
        
        username: "",
        email: "",
        password: ""
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showLogin: !this.state.showSignup})
    }
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
render() {
    return (
        <div>
        <Form >
                <FormGroup controlId="username">
                    <ControlLabel>Full name: </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.username}
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
            Login
          </Button>
          <p>Don't have an account with us? <Button>Login!</Button></p>
        </Form>
            
        </div>
    );
}
}
export default Signup;