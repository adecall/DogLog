import React, { Component } from "react";

import axios from "axios";
import { Button,Jumbotron,FormGroup,FormControl,Form,ButtonGroup, Row, Col} from 'react-bootstrap';

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
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getSearchDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }

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
        // this.setState({showResult: !this.state.showResult})
        
      }
    

      getSearchDataFromDb = ()=> {
          const imgid="";
          fetch("/api/getAnimal")
          .then(data => data.json())
          .then(res => this.setState({ animal: res.data ,imgid:res.data.id}))
          this.getImgurimage(imgid)
      }
      
      getImgurimage=(imgid)=> {
          axios.get("https://api.imgur.com/3/image/", {'headers': {
            "Authorization":"Client-ID  7aca4ff5e398a1a"}})
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
                <FormGroup center className="textarea">
                {/*<ControlLabel>zip</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="zip" />
                </FormGroup>
            
                <Button className="button" onClick={ this.onClicksubmit.bind(this) } type="submit">search</Button>
                
                </ButtonGroup>
                </p10> 
        </Jumbotron> 
   { this.state.showResult ? <SearchResult animal={this.state.animal} /> : null}
        
                  

        </div>
        );
    }
      }
export default Search;