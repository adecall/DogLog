import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getVolunteersQuery } from '../queries/queries'

class VolunteerList extends Component {

    displayVolunteers() {
        var data = this.props.data;

        if (data.loading) {
            return (<div> Loading volunteers.. One moment </div>);
        } else {
            return data.volunteers.map(volunteer => {
                return (
                    <div>
                    <li key={volunteer.id}>
                        Name: {volunteer.name}
                        <br />
                        Sit Rating: {volunteer.sit_rating}
                        <br />
                        Lay Down Rating: {volunteer.lay_down_rating}
                        <br />
                        Walk On Leash Rating: {volunteer.walk_on_leash_rating}
                        <br />
                        Sit in crate rating: {volunteer.sit_in_crate_rating}
                        <br />
                        Volunteer Comment: {volunteer.comment}
                        <br /><br />
                    </li>
                    </div>
                );
            });
        }
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="volunteer-list">
                    {this.displayVolunteers()}
                </ul>
            </div>
        );
    }
}

export default graphql(getVolunteersQuery)(VolunteerList);