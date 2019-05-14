import React from 'react';
import {ViewChore, EditChore, AddChore} from 'components/chores'
import Navbar from 'components/Navbar'
import {Route, Switch} from 'react-router-dom'
const Chores = () => {
    return (
        <div>
            <Navbar links={[{ link: "/", label: "home" },{ link: "/chores/view", label:"view" }, { link: "/chores/edit", label:"edit" }, { link: "/chores/add", label:"add" } ]}/>
            <h2>Chores Landing Page What Is Default View</h2>
            <Switch>
                <Route path="/chores/view/" component={ViewChore}/>
                <Route path="/chores/edit/" component={EditChore} />
                <Route path="/chores/add/" component={AddChore} />
            </Switch>
          
        </div>
    );
}

export default Chores;