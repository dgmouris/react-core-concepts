import React from 'react';
import uuidv1 from 'uuid'

const NoUsersWarning = (props) => {
    return (
        <React.Fragment>
            <ul className="mb-4 text-center">
                <li> Currently there are no users in the system.  </li>
                <li>Would you like to add a user now?</li>
            </ul>
            <button className="bg-light" onClick={() => props.onClick("please add new user")} >Add User</button>
        </React.Fragment >
    )
}

const User = (props) => {

    return (

        <li className="list-group-item">
            <span>item number: {props.user}</span>
            <button className="close" onClick={(e) => { props.onClick(props.index) }}> <span aria-hidden="true">&times;</span> </button>
        </li>
    )
}






const UserList = (props) => {

    return (

        < div className="card p-4" >
            {props.warning ? <NoUsersWarning onClick={props.addUser} /> : <ul className="list-group">
                {props.users.map((item) => {
                    const key = uuidv1();
                    return <User onClick={props.addUser} user={item.item} key={key} index={key} />
                })}
            </ul>}

        </div >
    );
}

export default UserList;