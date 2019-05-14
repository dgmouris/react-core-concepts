import React, { Component } from 'react';
import UserList from "../../components/userlist/UserList"
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/actions"



const mapStateToProps = state => {
    console.log("map state to props", state)
    return { users: state.users };
};

function mapDispatchToProps(dispatch) {
    return {
        newUser: (data) => {
            dispatch(addUser(data))
        }
    }

}

class UserAdminContainer extends Component {

    constructor(props) {

        super(props);
        this.state = {
            users: null,
            userWarning: true,
            newUser: ""
        };
    }

    componentWillMount = () => {
        this.setState({
            users: this.props.users
        })

        this.setState({
            userWarning: this.props.users.length > 0 ? false : true,

        })

    }


    addUser = (addMe) => {
        this.setState({
            userWarning: false
        })
        this.setState({
            newUser: "jim"
        })
        this.props.newUser(addMe)

    }
    removeUser = (userID) => {

    }

    render() {

        return (
            <div className="container" >
                <h3 className="h4"> user admin panel</h3>
                <UserList warning={this.state.userWarning} users={this.state.users} addUser={this.addUser} removeUser={this.removeUser} />
            </div>
        );
    }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(UserAdminContainer)
export default Users