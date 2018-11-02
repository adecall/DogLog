import React, { Component } from "react";
import  "./Body.css";

import { Button,Navbar,Nav,NavItem ,Row, Col} from 'react-bootstrap';
import { Image,Media } from "react-bootstrap";
// import Animalinfo from "../Animalinfo";
import About from "../About"
import Search from "../Search";
import AddRating from "../AddRating";
// import Instagram from "../Instagram";
// import { BrowserRouter as Router,Link } from "react-router-dom"
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
           
                <Navbar className="customnavbar" bsStyle="name">
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a  href="#home">Logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem  eventKey={1} href="#home">Home</NavItem>  
                        <NavItem  eventKey={2} href="#about">About</NavItem>  
                        <NavItem  eventKey={3} href="#">Service</NavItem>  
                        <NavItem  eventKey={4} href="#">Portfolio</NavItem>                  
                    </Nav>
                    <Nav pullRight>
                        <NavItem  eventKey={1} href="/login">Login</NavItem>
                        <NavItem  eventKey={2} href="/signup">Signup</NavItem>
                        <NavItem  eventKey={3} href="/animals">Administrator</NavItem>    
                    </Nav>  
                    </Navbar.Collapse> 
                </Navbar>
               
                <Search />
            
            <div id="about">
            <Row>
                <Media>
                <Col xs={12} sm={7} md={7} lg={7}>
                    <Media.Body>
                  
                    <Media.Heading><h1>About dog log</h1></Media.Heading>
                    <h4>Welcome to LA Animal Services. Please check out the links on this website to learn more find out about our mission, vision, and values. You can also learn about our General Manager, the Board of Animal Services Commissioners, review statistical information about the Department and learn about career opportunities available.<br></br></h4>
                    <p>The City of Los Angeles Animal Services Department (LAAS) was established 153 years ago. LAAS’s major areas of responsibility are saving the lives of animals that end up at one of our six City shelters, Public Safety and Enforcement of Municipal Code (Article 3:53.00).</p><br></br>
                    <p>LAAS operates six animal shelters and has field staff serving the community. The shelters are award winning facilities that have been built within the past 10-15 years. LAAS is one of the largest municipal shelter systems in the U.S., serving approximately 60,000 animals annually and responding to 20,000 emergency calls each year involving animals or people in danger. Each shelter has at least one veterinarian as well as Registered Vet Techs to assist. Our veterinary team has training and experience in orthopedic surgery, wildlife, high volume spay/neuter and more.</p><br></br>
                    <p>
                    Our field staff includes a world class Specialized Mobile Animal Rescue Team (SMART)– one of only two in the country, our Animal Control Officers are recognized experts in handling animal cruelty cases, they handle permits and all code enforcement including licensing, spay/neuter, leash laws and more whether they are helping dogs, cats, hawks, alligators, horses, turtles, etc. or the people who love them or fear them.</p>
               
                    </Media.Body>
                </Col>
                <Col xs={12}sm={5} md={5} lg={5}>
                    <Media.Right align="middle" >
                    <Image max-width={200} height={400} src="images/faces.jpg"/>
                    </Media.Right>
                    </Col>
                </Media>
                </Row>
            </div>
            
        {/*<Instagram />*/}
            <About />
            <Button className="submit"  type="submit"  onClick={this.onClickAnimal.bind(this)} >Volentiers
         
          </Button>
          {this.state.showAnimal && <AddRating />}
          
        </div>        )
    }
}
export default Body;

