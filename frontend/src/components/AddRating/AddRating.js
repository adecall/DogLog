import React, { Component } from 'react';
import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./AddRating.css"
class AddRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sit_rating: "",
            lay_down_rating: "",
            walk_on_leash_rating: "",
            sit_in_crate_rating: "",
            comment: ""
        }
    }

    submitForm(event) {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        // console.log(this.props);
        return (
            <div className="volunteerrating">
                <form id='add-rating' onSubmit={this.submitForm.bind(this)}>
                    <FormGroup className='field'>
                        <ControlLabel>name
                        </ControlLabel>
                        <br/>
                        <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
                    </FormGroup>
<p4>rating system: 1 = reasonable, 2 = good; 3 = excellent</p4>
<br/>
<br/>
                    <FormGroup className='field'>
                        <ControlLabel> sit! score </ControlLabel>
                        <FormControl componentClass="select" onChange={(event) => this.setState({ sit_rating: event.target.value })} >
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> down! rating </ControlLabel>
                        <FormControl componentClass="select" onChange={(event) => this.setState({ lay_down_rating: event.target.value })} >
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> walk on leash rating </ControlLabel>
                        <FormControl componentClass="select" onChange={(event) => this.setState({ walk_on_leash_rating: event.target.value })} >
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> crate rating </ControlLabel>
                        <FormControl componentClass="select" onChange={(event) => this.setState({ sit_in_crate_rating: event.target.value })} >
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> comment </ControlLabel>
                        <FormControl componentClass="textarea" type="text" onChange={(event) => this.setState({ comment: event.target.value })} />

                    </FormGroup>
<br/>
                    <Button className='submit'>submit</Button>
                </form>
            </div>
        );
    }
}

export default AddRating;