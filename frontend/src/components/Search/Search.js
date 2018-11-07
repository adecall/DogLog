import React, { Component } from "react";
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
        agelabel: '',
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
        const {agelabel, sex, size}= this.state;
        axios.get("/api/getAnimal" 
        ,{ params:{
            agelabel: agelabel,
            size: size,
            sex: sex
        }}
    ).then(res => this.setState({ animal: res.data })
    ).catch(err => console.log(err)) 
    }

    getVolenteerRatingFromdb = (id) =>{
        axios.get("/api/getRating/" + id)
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
                <FormControl className="select" componentClass="select" name="age" value={this.state.value} onChange={this.handleChange} placeholder="Age">
                    <option value="select">which age group?</option>
                    <option className="extraInfo" value="baby">baby</option>
                    <option className="extraInfo"value="young">young</option>
                    <option className="extraInfo"value="adult">adult</option>
                    <option className="extraInfo" value="senior">senior</option>
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
        
            { this.state.animal.length >0 && <Jumbotron style={{backgroundColor:"#337ab7"}}>
                <h1>Dogs Lists</h1>
            </Jumbotron>}
            
               {this.state.animal.length ? ( 
               <List>
                {this.state.animal.map(animaldata => (
                  <ListItem className="doglist" style={{ padding: "10px" }} key={animaldata._id}>
                
                    <span style={{ color: "blue" }}>Dog Name : </span>
                    {animaldata.name}<br/>
                    <span style={{ color: "blue" }}> Weight : </span>
                    {animaldata.weight}<br/>
                    <span style={{ color: "blue" }}> Age : </span>
                    {animaldata.age}<br/>
                    <span style={{ color: "blue" }}> Sex : </span>
                    {animaldata.sex}<br/>

                    {<img style={{width:120,height:120}}src={ animaldata.image } alt="dogimage"/>}
                    {/*<span style={{ color: "gray" }}> animal type: </span> {animaldata.animaltype} <br />*/}
            <button onClick={() => this.getVolunteerRatingFromdb(animaldata.id)}>Ratings

            </button>
                  </ListItem>
                ))}</List> ):null
                
            }
               
        </div>
        );
    }
      }
export default Search;