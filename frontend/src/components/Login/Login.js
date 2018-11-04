import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Redirect} from "react-router-dom";
// import  Signup from "../Signup";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignup: false,
      volenteerrating: false,
      email: "",
      password: ""
    };
  }
  loginOnClick(e){
    e.preventDefault();
    this.setState({volenteerrating:!this.state.volenteertable})
  }
  onClickSignup(e){
    e.preventDefault();
    this.setState({showSignup: !this.state.showSignup })
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
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <ControlLabel>email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
                 <br/>
          </FormGroup>
          <Button
           
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.loginOnClick.bind(this)}
          >
            login
             
          {this.state.volunteerrating && <Redirect to={{
            pathname: '/addrating'
          }} />}
<<<<<<< HEAD
          </Button>
          <br/>
          <Button className="button" type="submit" onClick={this.onClickSignup.bind(this)}>sign up
          {this.state.showSignup && <Redirect to={{
            pathname: '/signup'
          }} />}</Button>
=======
          </Button><br/>
          <p>Dont have an account <a  onClick={this.onClickSignup.bind(this)}>Signup
          {this.state.showSignup ? <Redirect to={{
            pathname: '/signup'
          }} />: null}</a></p>
>>>>>>> 360f71c345fcd1d4f78cadb15817508923e44159
          
        </form>
      </div>
    );
  }
}
