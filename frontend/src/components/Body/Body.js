import React, { Component } from "react";
import  "./Body.css"
// import Signup from "../Signup"
import Login from "../Login"
import { Button,Jumbotron,Navbar,Nav,NavItem,FormGroup,FormControl,ControlLabel,Form } from 'react-bootstrap';
import { Grid , Row, Col,Image} from "react-bootstrap";
class Body extends Component {
    constructor() {
        super();
        this.state = {
          showLogin: false,
            size:"",
            age: "",
            sex: ""
          
        }
      }
      handleChange(event){
        this.setState({[event.name]:event.target.value})
      }
      onClick(e){
        e.preventDefault();
        this.setState({showLogin: !this.state.showLogin})
      }
    render(){
        return(
            <div>
                <Navbar id="home" className="navbar" collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#home">Logo</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#home">Home</NavItem>  
                        <NavItem eventKey={2} href="#about">About</NavItem>  
                        <NavItem eventKey={3} href="#">Service</NavItem>  
                        <NavItem eventKey={4} href="#">Portfolio</NavItem>               
                        
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/Login">Login</NavItem>
                        <NavItem eventKey={1} href="/Signup">Signup</NavItem>
                        
                    </Nav>
                </Navbar>
            <Jumbotron id="home" className="jumbobckd">
                <h1>Dog Log</h1>
                {/*<p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>*/}
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
                <FormGroup className="form" value={this.state.value} onChange={this.handleChange} controlId="formInlineSize">
                    { /*<ControlLabel>Size</ControlLabel>*/}
                    <FormControl className="select"  componentClass="select" Change={this.handleChange}  placeholder="select size">
                        <option value="select">select size</option>
                        <option value="other">Small</option>
                        <option value="other">Medium</option>
                        <option value="other">Large</option>
                    </FormControl>
                </FormGroup>
                </Form>
                <FormGroup center className="textarea" controlId="formControlsTextarea">
            {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="select" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>
                <Button className="button" type="submit">Search</Button>
                
            </Jumbotron>
            <about id="about">
            <h1>About dog log</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
            </about>
            <h5>click the button to sign in or signup</h5>
            <Button className="button"   type="submit"><a onClick={this.onClick.bind(this)} href='#'>Shelter Login</a>
            {this.state.showLogin && <Login />} </Button>
            </div>
        )
    }
}
export default Body;

