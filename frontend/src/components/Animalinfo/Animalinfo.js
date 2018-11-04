
import React, { Component } from 'react';
import axios from 'axios';

import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./Animalinfo.css";

class Animalinfo extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleInputChange = this.handleInputChange.bind(this);  
    this.state = {
      animal: [],
      id: '',
      animaltype: '',
      name: '',
     weight: '',
      sex: '',
      age: ''
    };
}

  
  handleInputChange = e => {
    
   const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    
    const { id, animaltype, name, weight , sex, age } = this.state;

    axios.post('/api/putAnimal', { id, animaltype, name, weight , sex, age})
      .then((result) => {
        console.log(result);
        //access the results here....
        // this.getDataFromDb();
        this.setState({
            
            id: '',
            animaltype: '',
            name: '',
           weight: '',
            sex: '',
            age: ''
          });
      });
  }

  render() {
    
    return (
    
      <div className="animaldata">
        <form>
          <FormGroup controlId="formControlsId" bsSize="large">
              <ControlLabel>id </ControlLabel>
              <FormControl
                  type="id"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
          <FormGroup controlId="formControlsanimaltype" bsSize="large">
              <ControlLabel>species </ControlLabel>
              <FormControl
                  type="text"
                  name="animaltype"
                  value={this.state.animaltype}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
                
        
          <FormGroup controlId="formControlsName" bsSize="large">
            <ControlLabel>name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsWeight" bsSize="large">
            <ControlLabel>weight</ControlLabel>
            <FormControl
            autoFocus
            type="weight"
            name="weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsAge" bsSize="large">
            <ControlLabel>age</ControlLabel>
            <FormControl
            autoFocus
            type="age"
            name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsSex" bsSize="large">
            <ControlLabel>sex</ControlLabel>
            <FormControl
            autoFocus
            type="sex"
            name="sex"
              value={this.state.sex}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <Button
            // block
            // bsSize="large"
            // disabled={!this.validateForm()}
            type="submit"
            onClick={this.onSubmit}
          >
           Submit
          </Button><br />
          
        </form>
        
        </div>
    );
  }
}
export default Animalinfo;