
import React, { Component } from 'react';
import axios from 'axios';

import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./Animalinfo.css";

class Animalinfo extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleInputChange = this.handleInputChange.bind(this);  
        this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      animal: [],
      id: '',
      animaltype: '',
      name: '',
     weight: '',
      sex: '',
      age: '',
      images: [],
      message: ""
    };
}

  
  handleInputChange = e => {
    
   const { name, value } = e.target;
    this.setState({ [name]: value });
    let images=[]
    // for (var i = 0; i < e.target.files.length; i++) {
    //   images[i] = e.target.files.item(i);
    //   }
    //    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    //    let message = `${images.length} valid image(s) selected`
    //    this.setState({ images, message })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const { id, animaltype, name, weight , sex, age, images } = this.state;
    images.id=id;
    images.name=name;
    
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
            age: '',
            
          });
      });
      const formData = new FormData();
      var imagefile = document.querySelector('#animalImg');
      
      formData.append("image", imagefile.files[0]);
      debugger;
      axios.post("https://api.imgur.com/3/image", 
      formData,
      {
      "headers": {
        Authorization:"Client-ID 7aca4ff5e398a1a",
        'Content-Type': 'multipart/form-data'

      }
      
      }).then((response)=>{
        console.log("img result "+ response);
        this.getImgurl(response.id);
      })
      
     
  }
  getImgurl=(imgid)=> {
    axios.get("https://api.imgur.com/3/image/"+ imgid, {'headers': {
      "Authorization":"Client-ID  8ee1b4d05dd499f"}}).then((response)=>{
        
      })
}
    

  render() {
    
    return (
    
      <div className="animaldata">
        <form>
          <FormGroup controlId="formControlsId" bsSize="large">
              <ControlLabel>Id: </ControlLabel>
              <FormControl
                  type="id"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
          <FormGroup controlId="formControlsanimaltype" bsSize="large">
              <ControlLabel>Animal Type: </ControlLabel>
              <FormControl
                  type="text"
                  name="animaltype"
                  value={this.state.animaltype}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
                
        
          <FormGroup controlId="formControlsName" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsWeight" bsSize="large">
            <ControlLabel>Weight</ControlLabel>
            <FormControl
            autoFocus
            type="weight"
            name="weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsAge" bsSize="large">
            <ControlLabel>Age</ControlLabel>
            <FormControl
            autoFocus
            type="age"
            name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsSex" bsSize="large">
            <ControlLabel>Sex</ControlLabel>
            <FormControl
            autoFocus
            type="sex"
            name="sex"
              value={this.state.sex}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsimg" bsSize="large">
            <ControlLabel>img</ControlLabel>
            <FormControl
            autoFocus
            type="file"
            name="img"
            id="animalImg"
            onChange={this.handleInputChange}
            multiple
              value={this.state.img}
              
              
            />
            <p>{this.state.message}</p>
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
          <Button
            // block
            // bsSize="large"
            // disabled={!this.validateForm()}
            type="submit"
            onClick={this.getImgurl}
          >
           Imgurl
          </Button>
          
        </form>
        
        </div>
    );
  }
}
export default Animalinfo;