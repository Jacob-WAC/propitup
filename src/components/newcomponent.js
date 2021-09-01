import React, { Component } from "react";

class NewComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.person.lastName},{this.props.person.firstName}
                </h1>
                <p>age: {this.props.person.age}</p>
                <p>hair color: {this.props.person.hairColor}</p>
            </div>
        );
    }
}
export default NewComponent;
