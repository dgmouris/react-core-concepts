import React, { Component } from 'react';
import Form from "./Form";
import List from "./List";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: null
        }

    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2>Articles</h2>
                    <List />
                </div>
                <div className="col-md-4 offset-md-1">
                    <h2>Add a new article</h2>
                    <Form />
                </div>
            </div>
        );
    }
}

export default Display;