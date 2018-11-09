import React, { Component } from "react";
import { Card, CardText, CardBody, CardLink, CardHeader } from 'reactstrap';
import axios from "axios";

import { Button,Jumbotron,FormGroup,FormControl,ButtonGroup, Col} from 'react-bootstrap';
import SearchResult from "../SearchResult";
import "./Search.css";
import { List, ListItem } from "../../components/List";

class Search extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    
  
    this.state={
        showResult: false,
        intervalIsSet: false,
        id: "",
        animal: [],
        rating: [],
        animaltype: "",
        size: "",
        age: "",
        agelabel: "",
        sex: ""
    }
   }

componentDidMount() {
    // this.getSearchDataFromDb();
  }
  componentWillUnmount() {   
    
  }

    handleChange= event=>{
        const { name, value }= event.target;
        this.setState({[name]: value})
      }
    
    onClicksubmit= (e) =>{
        e.preventDefault();
        this.getSearchDataFromDb();
        this.setState({ showResult: !this.state.showResult});
    }
    
    getSearchDataFromDb = ()=> {
    //   const imgid="";
        const { size, agelabel, sex}= this.state;
        axios.get("/api/getAnimal" 
        ,{ params:{
            size: size,
            agelabel: agelabel,
            sex: sex
        }}
    ).then(res => this.setState({ animal: res.data })
    ).catch(err => console.log(err)) 
    }

    getVolenteerRatingFromdb = (animalid) =>{
        axios.get("/api/getRating/:" + animalid)
        .then(res => this.setState({ rating: res.ratingdata}))
        .catch(err => console.log(err))
    }
      
    
   
    render() {
        
        return(
            <div>
            <Jumbotron id="home" className="jumbobckd">
            <h1>// doglog</h1>
            <br/>
            <br/>
    <p10 className="text-center">
            <ButtonGroup vertical>
            <FormGroup className="Button">
                { /*<ControlLabel>Size</ControlLabel>*/}
                <FormControl className="select"  componentClass="select" name="size" value={this.state.value} onChange={this.handleChange}  placeholder="select size">
                    <option value="select"> what size of dog?</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="extra-large">extra large</option>
                </FormControl>
            </FormGroup>
            <FormGroup className="Button">
            {/*<ControlLabel>Age</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="agelabel" value={this.state.value} onChange={this.handleChange} placeholder="Age">
                    <option value="select">which age group?</option>
                    <option  value="baby">baby</option>
                    <option  value="young">young</option>
                    <option value="adult">adult</option>
                    <option  value="senior">senior</option>
                </FormControl>
            </FormGroup>
      
            <FormGroup className="Button">
                {/*<ControlLabel>Sex</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="sex" value={this.state.value} onChange={this.handleChange} placeholder="select sex">
                    <option value="select">male or female?</option>
                    <option value="female">female</option>
                    <option value="male">male</option>

                    </FormControl>
                </FormGroup>
             
               
                <Col>
                <FormGroup center className="textarea" controlId="formControlsTextarea">
                {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>
                </Col>
                <Button className="button" onClick={ this.onClicksubmit.bind(this) } type="submit">Search</Button>
               
                </ButtonGroup>
                </p10>
        </Jumbotron> 
            {/* this.state.showResult ? <SearchResult animal={this.state.animal} /> : null*/}
        
            { this.state.animal.length > 0 && <Jumbotron style={{backgroundColor:"paleturquoise"}}>
                <h1>Dogs Lists</h1>
            </Jumbotron>}
            
               {this.state.animal.length ? ( 
               <List>
                {this.state.animal.map(animaldata => (
                  <ListItem className="doglist" style={{ padding: "10px" }} key={animaldata._id}>
                
                  <Card className="cards">
                  <CardBody>
                  <CardHeader tag="h3"><span style={{ color: "blue" }}>Dog Name : {animaldata.name} </span></CardHeader>
                  </CardBody>
                  {<img style={{width:150,height:150}} src={ animaldata.image } alt="dogimage"/>}
                  <CardBody>
                  <CardText><span style={{ color: "blue" }}> Weight : {animaldata.weight} </span></CardText>
                  <CardText><span style={{ color: "blue" }}> Age : {animaldata.age} </span></CardText>
                  <CardText><span style={{ color: "blue" }}> Sex : {animaldata.sex} </span></CardText>
                  <CardText><span style={{ color: "blue" }}> Sex : {animaldata.size} </span></CardText>
                  <CardLink href="/Login">Volenteer Rating Form</CardLink>
                  <CardLink href="#">Dog Rating </CardLink>
                  </CardBody>
              </Card>
                    
            <button onClick={() => this.getVolenteerRatingFromdb(animaldata.id)}>Ratings           
            </button>
            
            {this.state.rating.length ? ( 
                <List>
                 {this.state.rating.map(ratingsdata => (
                   <ListItem className="doglist" style={{ padding: "10px" }} key={ratingsdata._id}>
                 
                     <span style={{ color: "blue" }}>Dog Name : </span>
                     {ratingsdata.name}<br/>
                     <span style={{ color: "blue" }}> Weight : </span>
                     {ratingsdata.weight}<br/>
                     <span style={{ color: "blue" }}> Age : </span>
                     {ratingsdata.age}<br/>
                     <span style={{ color: "blue" }}> Sex : </span>
                     {ratingsdata.sex}<br/>
                  </ListItem>
                ))}</List> ):null
                
            }
            </ListItem>
            ))}</List> ):null}  
        </div>
        );
    }
      }
export default Search;