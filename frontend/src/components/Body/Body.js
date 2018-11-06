import React, { Component } from "react";

import  "./Body.css";
import { Button,Navbar,Nav,NavItem, Row, NavDropdown} from 'react-bootstrap';
import {Media } from "react-bootstrap";
=======
import "./Body.css";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  Row,
  NavDropdown
} from "react-bootstrap";
import { Media } from "react-bootstrap";

// import Animalinfo from "../Animalinfo";
import About from "../About";
import Search from "../Search";
import AddRating from "../AddRating";
//import Login from "../Login";

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showAnimal: false,
          
        }
      }
      
      onClickAnimal(e){
        e.preventDefault();
        this.setState({showAnimal: !this.state.showAnimal})
      }
     
    render(){
        return(
            
            <div>
           
           <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">doglog</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#home">
        home
      </NavItem>
      <NavItem eventKey={2} href="#about">
        about
      </NavItem>
      <NavItem  eventKey={3} href="#gallery">gallery</NavItem>  
    <NavItem  eventKey={4} href="#map">map</NavItem>  
      <NavDropdown eventKey={3} title="admin" id="basic-nav-dropdown">
        <NavItem eventKey={3.1} href="/login">login</NavItem>
        <NavItem eventKey={3.2}href="/signup">sign in</NavItem>
        <NavItem eventKey={3.3}href="/animals">administrator</NavItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
    </Nav>
  </Navbar.Collapse>
</Navbar>              
           <Search />
            
            <div id="about">
            <Row>
                <Media>
              
                    <Media.Body>
                  
                    <Media.Heading><h1>// about doglog</h1></Media.Heading>
                    <h3>welcome to la animal services. please check out the links on this website to learn more about our mission, vision, and values.</h3>
                    <p>the city of los angeles animal services department (laas) was established 153 years ago. its major areas of responsibility are saving the lives of animals that end up at one of our six city shelters, public safety and enforcement of municipal code (article 3:53.00).</p>
                    <p>laas operates six animal shelters and has field staff serving the community. the shelters are award-winning facilities that have been built within the past 10-15 years. laas is one of the largest municipal shelter systems in the country, serving approximately 60,000 animals annually and responding to 20,000 emergency calls each year involving animals or people in danger. each shelter has at least one veterinarian, as well as registered vet techs to assist. our veterinary team has training and experience in orthopedic surgery, wildlife, high volume spay/neuter and more.</p>
                    <p>our field staff includes a world-class specialized mobile animal rescue team (s.m.a.r.t)– one of only two in the country, our animal control officers are recognized experts in handling animal cruelty cases, they handle permits and all code enforcement including licensing, spay/neuter, leash laws and more whether they are helping dogs, cats, hawks, alligators, horses, turtles, etc. or the people who love them or fear them.</p>
               
                    </Media.Body>
            
                </Media>
                </Row>
            </div>
            
        
            <About />
            <Button className="submit" bsSize="large" type="submit"  onClick={this.onClickAnimal.bind(this)} >Volentiers
         
          </Button>
          {this.state.showAnimal ? <AddRating /> : null}
          
 

          
        </div>        )
    }
  constructor(props) {
    super(props);
    this.state = {
      showAnimal: false
    };
  }

  onClickAnimal(e) {
    e.preventDefault();
    this.setState({ showAnimal: !this.state.showAnimal });
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">doglog</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#home">
                home
              </NavItem>
              <NavItem eventKey={2} href="#about">
                about
              </NavItem>
              <NavItem eventKey={3} href="#gallery">
                gallery
              </NavItem>
              <NavItem eventKey={4} href="#map">
                map
              </NavItem>
              <NavDropdown eventKey={3} title="admin" id="basic-nav-dropdown">
                <NavItem eventKey={3.1} href="/login">
                  login
                </NavItem>
                <NavItem eventKey={3.2} href="/signup">
                  sign in
                </NavItem>
                <NavItem eventKey={3.3} href="/animals">
                  administrator
                </NavItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight />
          </Navbar.Collapse>
        </Navbar>
        <Search />

        <div id="about">
          <Row>
            <Media>
              <Media.Body>
                <Media.Heading>
                  <h1>// about doglog</h1>
                </Media.Heading>
                <h3>
                  welcome to la animal services. please check out the links on
                  this website to learn more about our mission, vision, and
                  values.
                </h3>
                <p>
                  the city of los angeles animal services department (laas) was
                  established 153 years ago. its major areas of responsibility
                  are saving the lives of animals that end up at one of our six
                  city shelters, public safety and enforcement of municipal code
                  (article 3:53.00).
                </p>
                <p>
                  laas operates six animal shelters and has field staff serving
                  the community. the shelters are award-winning facilities that
                  have been built within the past 10-15 years. laas is one of
                  the largest municipal shelter systems in the country, serving
                  approximately 60,000 animals annually and responding to 20,000
                  emergency calls each year involving animals or people in
                  danger. each shelter has at least one veterinarian, as well as
                  registered vet techs to assist. our veterinary team has
                  training and experience in orthopedic surgery, wildlife, high
                  volume spay/neuter and more.
                </p>
                <p>
                  our field staff includes a world-class specialized mobile
                  animal rescue team (s.m.a.r.t)– one of only two in the
                  country, our animal control officers are recognized experts in
                  handling animal cruelty cases, they handle permits and all
                  code enforcement including licensing, spay/neuter, leash laws
                  and more whether they are helping dogs, cats, hawks,
                  alligators, horses, turtles, etc. or the people who love them
                  or fear them.
                </p>
              </Media.Body>
            </Media>
          </Row>
        </div>

        <About />
        <Button
          className="submit"
          bsSize="large"
          type="submit"
          onClick={this.onClickAnimal.bind(this)}
        >
          Volunteers
        </Button>
        {this.state.showAnimal ? <AddRating /> : null}
      </div>
    );
  }

}
export default Body;
