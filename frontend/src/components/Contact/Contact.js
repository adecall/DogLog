import React, { Component } from 'react';
import { FormGroup,ControlLabel, Button, Form} from 'react-bootstrap';
import "./Contact.css"
class ContactPage extends Component {
  render() {
    return(
      <div>
      <Form className="form">
      <FormGroup>
        <ControlLabel for="name">Name:</ControlLabel>
        <input type="name" className="form-control" id="name" placeholder="Enter Name"/>
      </FormGroup>
      <FormGroup>
        <ControlLabel for="email">Email:</ControlLabel>
        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
      </FormGroup>
      <FormGroup>
        <ControlLabel for="msg">Message:</ControlLabel>
        <input type="message" className="form-control" id="msg" placeholder="message"/>
      </FormGroup>
      
      <Button  btn-default btn-primary id="submit1" className="btn ">Submit</Button>
    </Form>
      </div>
    );
  };
}

export default ContactPage;