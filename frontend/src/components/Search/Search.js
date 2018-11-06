import React, { Component } from "react";
import axios from "axios";
import { Button,Jumbotron,FormGroup,FormControl,Form, Row, Col} from 'react-bootstrap';
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
        agelable: '',
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
        const {agelable, sex, size}= this.state;
        axios.get("/api/getAnimal" 
        ,{ params:{
            agelable: agelable,
            size: size,
            sex: sex
        }}
    ).then(res => this.setState({ animal: res.data })
    ).catch(err => console.log(err)) 
    }

    // getVolenteerRatingFromdb = (id) =>{
    //     axios.get("/api/getRating/" + id)
    //     .then(res => this.setState({ rating: res.ratingdata}))
    //     .catch(err => console.log(err))
    // }
      
    //   getImgurimage=(imgid)=> {
    //       axios.get("https://api.imgur.com/3/image/", {'headers': {
    //         "Authorization":"Client-ID  7aca4ff5e398a1a"}})
    //   }
   
    render() {
        
        return(
            <div>
            <Jumbotron id="home" className="jumbobckd">
                <h1>Dog Log</h1>
                <Row>
                <Form inline  center className="blockform">
                
                <Col xs={12} s={4} md={3} lg={3}>
                <FormGroup className="form" controlId="formInlineAge">
                {/*<ControlLabel>Age</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" name="agelable" value={this.state.value} onChange={this.handleChange} placeholder="Age">
                        <option value="select">select age</option>
                        <option value="baby">baby</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </FormControl>
                </FormGroup>
                </Col>
                <Col xs={12} s={4} md={3} lg={3}>
                <FormGroup className="form" controlId="formInlineSex">
                    {/*<ControlLabel>Sex</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" name="sex" value={this.state.value} onChange={this.handleChange} placeholder="select sex">
                        <option value="select">select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </FormControl>
                </FormGroup>
                </Col>
                <Col xs={12} s={4} md={3} lg={3}>
                <FormGroup className="form"  controlId="formInlineSize">
                    { /*<ControlLabel>Size</ControlLabel>*/}
                    <FormControl className="select"  componentClass="select" name="size" value={this.state.value} onChange={this.handleChange}  placeholder="select size">
                        <option value="select">select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </FormControl>
                </FormGroup>
                </Col>
                </Form>
                <Col>
                <FormGroup center className="textarea" controlId="formControlsTextarea">
                {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>
                </Col>
                <Button className="button" onClick={ this.onClicksubmit.bind(this) } type="submit">Search</Button>
                
                </Row>   
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
            <button onClick={() => this.getVolenteerRatingFromdb(animaldata.id)}>Ratings
            </button>
                  </ListItem>
                ))}</List> ):null
                // (<h3>no animaldataa</h3>)
            }
               
        </div>
        );
    }
      }
export default Search;