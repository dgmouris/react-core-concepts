import React, { Component } from 'react';
import styled from "styled-components";

const EmployeeContainer = styled.div`
padding: 0.5rem;
display:grid;
grid-row-gap: 1.5rem;
@media(min-width:500px){
    &{
       
        grid-template-columns: 1fr 1fr;
        grid-gap:1.5rem;
    }
  figure{
   padding: 1rem 0;
     flex-direction:column;
     align-items:center;
 
     img{
         border: 1px solid #ddd;
         padding: 1px;
        margin-bottom: 1rem
     }
     .details{
        margin-left:0rem;
     }
          
   }
}

@media(min-width:800px){
    &{
        max-width: 960px;
        margin: 2rem auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:1.5rem;
    }
 
  
`
const EmployeeCard = styled.figure`
 
    box-shadow: 0 0 3px 0 #ccc;
    display:flex;
    align-items:center;
    img{
        margin-right: 1.5rem;
    }
 ul{
     list-style-type:none;
 
 }
 li{
    font-size: 0.5rem;
    color:#aaa;
}
li span{
    font-size:0.8rem;
    color:red;
}
 .name {
     font-size: 1.5rem;
     margin-bottom: 0.125rem;
     color:grey;
 }

 .email span{
     display:block;
     margin-bottom: 0.5rem;
     color:#ccc;
 }
   
 .details{
     margin-left:1rem;
 }
 .details li{
    margin-bottom: 0.5rem;
 }
                 
`

const Employee = ({ name, email, cell, phone, location, picture }) => {
    return (
        <EmployeeCard>
            <img src={picture.large} alt={`${name.title} ${name.first} ${name.last}`} />
            <figcaption>
                <ul className="profile">
                    <li className="name">  {`${name.first} ${name.last}`} </li>
                    <li className="email"><span>{email}</span></li>
                    <li>
                        <ul className="details">
                            <li>cell: <span>{cell}</span></li>
                            <li>phone: <span>{phone}</span></li>
                        </ul>
                    </li>
                </ul>
            </figcaption>
        </EmployeeCard>
    )

}
class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const employees = this.props.list.employees;
        let items = null;
        if (this.props.list.isLoaded) {
            items = employees.map((item, index) => {
                return <Employee  {...item} key={item.login.uuid} index={item.login.uuid} />
            });
        }
        return (
            <div>
                <p>Employee List</p>
                <EmployeeContainer>
                    {items}
                </EmployeeContainer>

            </div>
        );
    }
}

export default EmployeeList;