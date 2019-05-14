import React from 'react';


function Plant(props){
    return (
        <div className="plant">
        <p> Type {props.plant.type}</p>
        <p> Name: {props.plant.name}</p>
        <p>Price: ${props.plant.price}</p>
        </div>
    );
}

function Plants (props){
    return (
        <div className="plants">
           {props.plants.map(function(plant){
                   return (<Plant key={plant.id} plant={plant} />)           
           })} 
        </div>
    )
}

export default Plants;
/*
TO DO LIST
Format the price to $. 00
*/