import React, { Component } from 'react';
import { EmployeeContext } from "../../data/dataloader/DataProvider";
import EmployeeList from "./EmployeeList";




class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            employeeData: [],
        };
    }

    render() {

        return (
            <EmployeeContext.Consumer>
                {(value) => (<EmployeeList list={value} />)}

            </EmployeeContext.Consumer>


        );
    }
}

export default Employees;