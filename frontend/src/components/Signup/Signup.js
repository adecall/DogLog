
import React, { Component } from 'react';
import axios from 'axios';
import Results from "../Results";
import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./Signup.css";
import {Redirect} from "react-router-dom";

class Signup extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleInputChange = this.handleInputChange.bind(this);
    
  
    this.state = {
  
      data: [],
      id: "",
      fname: '',
      lname: '',
      email: '',
      password: '',
      showLogin: false,
      showresult: false,
      intervalIsSet: false
    };
}

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.fname.length>0 && this.state.lname.length>0 ;
  }
  componentDidMount() {
   // this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval});
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  handleInputChange = e => {
    
   const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onClickLogin(e){
    e.preventDefault();
    this.setState({showLogin: !this.state.showLogin, showresult: this.state.showresult })
  }
  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    const { fname, lname, email, password } = this.state;

    axios.post('/api/putData', { id: idToBeAdded, fname, lname, email, password})
      .then((result) => {
        console.log(result);
        //access the results here....
        // this.getDataFromDb();
        this.setState({
      
            fname: "",
            lname:"",
            email: "",
            password: ""
          });
          
      });
  }
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  render() {
    
    return (
    
      <div className="Login">
        <form>
          <FormGroup controlId="formBasicText">
              <ControlLabel>first name: </ControlLabel>
              <FormControl
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
          <FormGroup controlId="lname">
              <ControlLabel>last name: </ControlLabel>
              <FormControl
                  type="text"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
                
        
          <FormGroup controlId="formControlsEmail" bsSize="large">
            <ControlLabel>email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsPassword" bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
            autoFocus
            type="password"
            name="password"
              value={this.state.password}
              onChange={this.handleInputChange}    
            />
          </FormGroup>
          <Button
            // block
            bsSize="large"
            // disabled={!this.validateForm()}
            type="submit"
            onClick={this.onSubmit}
          >
            
          </Button><br/>
          <p>if you have an account  <a className="button" type="submit" href="" onClick={this.onClickLogin.bind(this)}>login
          {this.state.showLogin && <Redirect to={{
            pathname: '/Login'
          }} />}</a></p>
        </form>
         {this.state.showresult ? <Results data={this.state.data}/>: null  }
        </div>
    );
  }
}
export default Signup;