import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import {PageOne, PageTwo, PageThree, PageFour, PageFive, Default} from '../../pages/PageOne';
import styled from 'styled-components';

const DashboarLink = styled(Link)`
  color: #fff;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  text-decortation:none;
  &:hover {
    text-decoration: none;
    color:white;
  }
  &.active {
    color: red;
  }
 `
 
 

 const DashBoard = ()=>{
  return(
    <div className="dashboard">
         <aside className="sidebar">
         <h3 className="dashboard-header">Dashboard Options</h3>
         <ul className="dashboard-links">
         <li><DashboarLink to="/" >Sigh Out</DashboarLink></li>
         <li><Link to="/dashboard/page-1">Page - 1</Link></li>
           <li><Link to="/dashboard/page-2">Page - 2</Link></li>
           <li><Link to="/dashboard/page-3">Page - 3</Link></li>
           <li><Link to="/dashboard/page-4">Page - 4</Link></li>
           <li><Link to="/dashboard/page-5" >Page - 5</Link></li>
         </ul>
         </aside>
         <section className="content-panels">
               <Switch>
               <Route exact path="/dashboard" component={Default}/>
               <Route path="/dashboard/page-1/" component={PageOne}/>
                  <Route path="/dashboard/page-2/" component={PageTwo}/>
                  <Route path="/dashboard/page-3/" component={PageThree}/>
                  <Route path="/dashboard/page-4/" component={PageFour}/>
                  <Route path="/dashboard/page-5/" component={PageFive}/>
               </Switch>
         </section>
    </div>
    )
 }

 

export default DashBoard;
