import React, { Component } from "react";
import  "./Body.css";
import {Redirect} from "react-router-dom";

import { Button,Jumbotron,Navbar,Nav,NavItem,FormGroup,FormControl,Form } from 'react-bootstrap';
import { Grid , Row, Col,Image,Media,Panel} from "react-bootstrap";
// import { BrowserRouter as Router,Link } from "react-router-dom"
class Body extends Component {
    constructor() {
        super();
        this.state = {
          showLogin: false,
          showSignup:false,
          showResult:false,
            size:"",
            age: "",
            sex: ""
          
        }
      }
      handleChange(event){
        this.setState({[event.name]:event.target.value})
      }
      onClicksubmit(e){
        e.preventDefault();
        this.setState({showresult: !this.state.showLogin})
      }
      onClickLogin(e){
        e.preventDefault();
        this.setState({showLogin: !this.state.showLogin})
      }
      onClickSignup(e){
        e.preventDefault();
        this.setState({showLogin: !this.state.showLogin})
      }
    render(){
        return(
            
            <div>
           
                <Navbar  fixedTop  fluid className="navbar navbar-default " collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a  href="#home">Logo</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem  eventKey={1} href="#home">Home</NavItem>  
                        <NavItem  eventKey={2} href="#about">About</NavItem>  
                        <NavItem  eventKey={3} href="#">Service</NavItem>  
                        <NavItem  eventKey={4} href="#">Portfolio</NavItem>                  
                    </Nav>
                    <Nav pullRight>
                        <NavItem  eventKey={1} href="/login">Login</NavItem>
                        <NavItem  eventKey={2} href="/signup">Signup</NavItem>    
                    </Nav>   
                </Navbar>
               
            <Jumbotron id="home" className="jumbobckd">
                <h1>Dog Log</h1>
                
                <Form inline  center className="blockform">
                <FormGroup className="form" controlId="formInlineSize">
                    {/*<ControlLabel>Type of Animal</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" value={this.state.value} onChange={this.handleChange} placeholder="Dog or cat">
                        <option value="select">dog or cat</option>
                        <option value="other">Cat</option>
                        <option value="other">Dog</option>
                        
                    </FormControl>
                </FormGroup>
                <FormGroup className="form" controlId="formInlineAge">
                   {/*<ControlLabel>Age</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" value={this.state.value} onChange={this.handleChange} placeholder="Age">
                        <option value="select">select age</option>
                        <option value="other">baby</option>
                        <option value="other">Young</option>
                        <option value="other">Adult</option>
                        <option value="other">Senior</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="form" controlId="formInlineSex">
                    {/*<ControlLabel>Sex</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" value={this.state.value} onChange={this.handleChange} placeholder="select sex">
                        <option value="select">select gender</option>
                        <option value="other">Female</option>
                        <option value="other">Male</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="form"  controlId="formInlineSize">
                    { /*<ControlLabel>Size</ControlLabel>*/}
                    <FormControl className="select"  componentClass="select" value={this.state.value} onChange={this.handleChange}  placeholder="select size">
                        <option value="select">select size</option>
                        <option value="other">Small</option>
                        <option value="other">Medium</option>
                        <option value="other">Large</option>
                    </FormControl>
                </FormGroup>
                </Form>
                <FormGroup center className="textarea" controlId="formControlsTextarea">
            {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>
                <Button className="button" onClick={this.onClicksubmit.bind(this)} type="submit">{}Search</Button>
                
            </Jumbotron>
            
            <div id="about">
                <Media>
                    <Media.Body>
                    <Media.Heading><h1>About dog log</h1></Media.Heading>
                    <h4>Welcome to LA Animal Services. Please check out the links on this website to learn more find out about our mission, vision, and values. You can also learn about our General Manager, the Board of Animal Services Commissioners, review statistical information about the Department and learn about career opportunities available.<br></br></h4>
                    <p>The City of Los Angeles Animal Services Department (LAAS) was established 153 years ago. LAAS’s major areas of responsibility are saving the lives of animals that end up at one of our six City shelters, Public Safety and Enforcement of Municipal Code (Article 3:53.00).</p><br></br>
                    <p>LAAS operates six animal shelters and has field staff serving the community. The shelters are award winning facilities that have been built within the past 10-15 years. LAAS is one of the largest municipal shelter systems in the U.S., serving approximately 60,000 animals annually and responding to 20,000 emergency calls each year involving animals or people in danger. Each shelter has at least one veterinarian as well as Registered Vet Techs to assist. Our veterinary team has training and experience in orthopedic surgery, wildlife, high volume spay/neuter and more.</p><br></br>
                    <p>
                    Our field staff includes a world class Specialized Mobile Animal Rescue Team (SMART)– one of only two in the country, our Animal Control Officers are recognized experts in handling animal cruelty cases, they handle permits and all code enforcement including licensing, spay/neuter, leash laws and more whether they are helping dogs, cats, hawks, alligators, horses, turtles, etc. or the people who love them or fear them.</p>
               
                    </Media.Body>
                    <Media.Right align="middle" >
                    <Image max-width={200} height={400} src="images/faces.jpg"/>
                    </Media.Right>
                </Media>
                 
        </div>
            <Grid>
                <Row>
                    
                    <Col xs={12} md={3} lg={3}>
                    <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive/>
                    <p>Devid MacFadyen</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>      
                    <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                    <p>Albert Decall</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>      
                    <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                    <p>Alex</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>      
                    <Image src="https://placehold.it/150x80?text=IMAGE" rounded responsive />
                    <p>Aynalem</p>
                    </Col>
                </Row>
            </Grid>;
          
            <h5>click the button to sign in or signup</h5>
            <Button className="button" type="submit" onClick={this.onClickLogin.bind(this)} >Volentiers
          {this.state.showLogin && <Redirect to={{
            pathname: '/login'
          }} />}</Button>
          
        </div>        )
    }
}
export default Body;

