import React, { Component } from "react";
import { Button,Jumbotron,FormGroup,FormControl,Form } from 'react-bootstrap';
import SearchResult from "../SearchResult";
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    
  
    this.state={
        showResult: false,
        intervalIsSet: false,
        id: "",
        animal: [],
        animaltype: "",
        size: "",
        age: "",
        agelable: '',
        sex: ""
    }
   }

componentDidMount() {
    this.getSearchDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getSearchDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

    handleChange= event=>{
        const { name, value }= event.target;
        this.setState({[name]: value})
      }
    
      onClicksubmit= (e) =>{
        e.preventDefault();
        this.getSearchDataFromDb();
    
      this.setState({ showResult: !this.state.showResult});
        // this.setState({showResult: !this.state.showResult})
        
      }
    
      getSearchDataFromDb = ()=> {
          fetch("/api/getAnimal")
          .then(data => data.json())
          .then(res => this.setState({ animal: res.animal }))
          
      }

   
    render() {
        
        return(
            <div>
            <Jumbotron id="home" className="jumbobckd">
                <h1>Dog Log</h1>

                <Form inline  center className="blockform">
                <FormGroup className="form" controlId="formInlineAnimaltype">
                    {/*<ControlLabel>Type of Animal</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" name="animaltype" value={this.state.value} onChange={this.handleChange} placeholder="Dog or cat">
                        <option value="select">dog or cat</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        
                    </FormControl>
                </FormGroup>
                <FormGroup className="form" controlId="formInlineAge">
                {/*<ControlLabel>Age</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" name="age" value={this.state.value} onChange={this.handleChange} placeholder="Age">
                        <option value="select">select age</option>
                        <option value="baby">baby</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="form" controlId="formInlineSex">
                    {/*<ControlLabel>Sex</ControlLabel>*/}
                    <FormControl className="select" componentClass="select" name="sex" value={this.state.value} onChange={this.handleChange} placeholder="select sex">
                        <option value="select">select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="form"  controlId="formInlineSize">
                    { /*<ControlLabel>Size</ControlLabel>*/}
                    <FormControl className="select"  componentClass="select" name="size" value={this.state.value} onChange={this.handleChange}  placeholder="select size">
                        <option value="select">select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </FormControl>
                </FormGroup>
                </Form>
                <FormGroup center className="textarea" controlId="formControlsTextarea">
                {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>

                <Button className="button" onClick={ this.onClicksubmit.bind(this) } type="submit">Search</Button>
                
                
        </Jumbotron> 
       {<SearchResult animal={this.state.animal} />&& this.state.showResult}
        {/*<ul>
                { animal.length <= 0 
                  ? "NO DB ENTRIES YET"
                  : animal.map(dat => (
                      <li style={{ padding: "10px" }} key={dat.id}>
                        <span style={{ color: "gray" }}> animal type: </span> {dat.animaltype} <br />
                        <span style={{ color: "gray" }}> name: </span>
                        {dat.name}
                        <span style={{ color: "gray" }}> weight: </span>
                        {dat.weight}
                        <span style={{ color: "gray" }}> age: </span>
                        {dat.age}
                        <span style={{ color: "gray" }}> sex: </span>
                        {dat.sex}
                      </li>
                    ))}
                  </ul> */}
                  
        </div>
        );
    }
      }
export default Search;