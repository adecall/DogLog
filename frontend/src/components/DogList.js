import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getDogsQuery } from '../queries/queries'

class DogList extends Component {

    displayDogs() {
        var data = this.props.data;

        if (data.loading) {
            return (<div> Loading dogs.. One moment </div>);
        } else {
            return data.dogs.map(dog => {
                return (
                    <li key={dog.id}>
                        Name: {dog.name}
                        <br />
                        Age: {dog.age}
                        <br />
                        Gender: {dog.gender}
                        <br />
                        Size: {dog.size}
                        <br /> <br />

                    </li>
                );
            });
        }
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                <ul id="dog-list">
                    {this.displayDogs()}
                </ul>
            </div>
        );
    }
}

export default graphql(getDogsQuery)(DogList);