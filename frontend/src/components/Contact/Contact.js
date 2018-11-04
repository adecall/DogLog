import React, { Component } from 'react';
import { FormGroup,ControlLabel, Button, Form} from 'react-bootstrap';
import "./Contact.css"
class ContactPage extends Component {
  render() {
    return(
      <div>
        <br/>
      <Form className="form">
      <FormGroup>
        <input type="name" className="form-control" id="name" placeholder="name"/>
      </FormGroup>
      <FormGroup>
        <input type="email" className="form-control" id="email" placeholder="email"/>
      </FormGroup>
      <FormGroup>
        <input type="message" className="form-control" id="msg" placeholder="message"/>
      </FormGroup>
      <br/>
      <br/>


      <Button  btn-default btn-primary id="submit1" className="btn ">submit</Button>
    </Form>
    <br/>
      </div>
    
    );
  };
}

export default ContactPage;