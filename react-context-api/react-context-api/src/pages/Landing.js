import React, {Fragment} from 'react';
import Navbar from '../components/Navbar';

const LandingPageLinks=[
    { link: "/", label: "home" }, 
    { link: "/chores", label: "chores" }
]

const Landing = () => {
    return (
        <Fragment>
            <Navbar links={LandingPageLinks}/>           
                <h1>Millwoods Wagner Garden</h1>
        </Fragment>
    );
}

export default Landing;