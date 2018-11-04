import React, { Component } from "react";
import axios from "axios";
import { Button,Jumbotron,FormGroup,FormControl,Form, Row, Col} from 'react-bootstrap';
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
                <h1>Dog Log</h1>
                <Row>
                <Form inline  center className="blockform">
                
                <Col xs={12} s={4} md={3} lg={3}>
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
            { this.state.showResult ? <SearchResult animal={this.state.animal} /> : null}
        
                  
        </div>
        );
    }
      }
export default Search;