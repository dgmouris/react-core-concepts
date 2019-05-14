import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import {PageOne, PageTwo, PageThree, PageFour, PageFive, Default} from '../../pages/PageOne';
import styled from 'styled-components';
const DashboardLink = styled(Link)`
  color: grey;
  display: block;
  margin: 0.25rem 0;
  font-family: Helvetica, Arial, sans-serif;
  text-decortation:none;
  &:hover {
    text-decoration: none;
    color:lightgrey;
  }
  &.active {
    color: red;
  }
 `

 const SideBar = styled.aside`
 background:black;
 height:100vh;
 width:280px;
 display:flex;
 flex-direction:column;
 box-shadow: 2px 0 2px 0 rgba(0,0,0,0.45);
 h3{
   font-size:1.5rem;
   text-align:center;
   margin:2rem 0;
   color:tomato;
 }
 ul{
   margin:2rem auto;
   list-stlye-type:none;
 }
 li{
   list-style-type:none;
   margin-bottom:1rem;
 }
 `

 const DashBoardView = styled.div`
   display:flex;
 `
 const DropDown = styled.ul` 
   display:none;
 `
 

 const DashBoard = ()=>{
  return(
    <DashBoardView>
         <SideBar>
         <h3 className="dashboard-header">Dashboard Options</h3>
         <ul>
         <li><DashboardLink to="/dashboard" >Home</DashboardLink></li>
         <li><DashboardLink to="/dashboard/page-1">User Profile</DashboardLink></li>
           <li>
             <DashboardLink to="/dashboard/page-2">Classes</DashboardLink>
             <DropDown><li>cpsc1520 section a</li><li>cpsc1520 section a</li><li>cpsc1520 section a</li><li>cpsc1520 section a</li></DropDown>
           </li>
           <li><DashboardLink to="/dashboard/page-3">Grades</DashboardLink></li>
           <li><DashboardLink to="/dashboard/page-4">Attendance</DashboardLink></li>
           <li><DashboardLink to="/dashboard/page-5" >Sick</DashboardLink></li>
         </ul>
         </SideBar>
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
    </DashBoardView>
    )
 }

 

export default DashBoard;
