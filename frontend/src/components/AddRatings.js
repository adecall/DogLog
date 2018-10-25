import React, { Component } from 'react';

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
            <form id='add-rating' onSubmit={this.submitForm.bind(this)}>

                <div className='field'>
                    <label> Volunteer Name </label>
                    <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
                </div>

                <div className='field'>
                    <label> sit_rating </label>
                    <select onChange={(event) => this.setState({ sit_rating: event.target.value })} >
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                    </select>
                </div>

                <div className='field'>
                    <label> lay_down_rating </label>
                    <select onChange={(event) => this.setState({ lay_down_rating: event.target.value })} >
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                    </select>
                </div>

                <div className='field'>
                    <label> walk_on_leash_rating </label>
                    <select onChange={(event) => this.setState({ walk_on_leash_rating: event.target.value })} >
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                    </select>
                </div>

                <div className='field'>
                    <label> sit_in_crate_rating </label>
                    <select onChange={(event) => this.setState({ sit_in_crate_rating: event.target.value })} >
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                    </select>
                </div>

                <div className='field'>
                    <label> Comment </label>
                    <textarea type="text" onChange={(event) => this.setState({ comment: event.target.value })} />

                </div>

                <button className='submit'>Submit</button>
            </form>
        );
    }
}

export default AddRating;