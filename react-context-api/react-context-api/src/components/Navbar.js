import React from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1'
import {Link} from 'react-router-dom'
const NavContainer = styled.nav ` 
   background:crimson;
   padding: 1rem;
   color:#fff;
   user-select:none;
   h3{
       font-size:2.5rem;
       text-align:center;
       padding:1.5rem 0 2rem 0;
   }
   ul{
 
       display:flex;
       justify-content:center;
 
   }
   li{
       margin: 0 2rem;
       font-size: 1.125rem;
       cursor:pointer;
   }
`

const Navbar = (props) => {
    return (
        <NavContainer>
            <h3>Garden Chores</h3>
            <ul>
                {props.links.map((item, index)=>
                    <li key={uuidv1()}><Link to={ item.link}>{item.label}</Link></li>
                )}
            </ul>
        </NavContainer>
    );
}

export default Navbar;