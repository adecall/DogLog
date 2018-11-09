import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import AddRating from "../AddRating";
import "./Togglebutton.css";
class Togglebutton extends Component {
    state={
        isHidden:false
    }
    toggleHidden=()=>{
        this.setState({isHidden: !this.state.isHidden})

    }

    render(){
        return(
            <div>
            <Button bsSize="large" bsWidth="100px" className='volunteerbutton' onClick={this.toggleHidden.bind(this)}>Rating Form</Button>
            {this.state.isHidden && <AddRating />}
            </div>
           
        )
    }
}
export default Togglebutton;