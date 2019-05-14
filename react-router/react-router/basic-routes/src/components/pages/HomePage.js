import React from 'react';
import {Link} from "react-router-dom";
 


const HomePage = ()=>{
    return(
        <div>
            <h1>THIS IS THE HOME PAGE</h1> 
            <Link to="./dashboard">dashboard</Link>
        </div> 
    )
}

export default HomePage