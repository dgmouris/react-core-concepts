 import React from 'react';


 

function Filters(props){
  let types;
  let filterItems=[];
 

  types = props.plants.map(function(temp){
       return temp.type;
  })

  types.forEach(function (value) {
    if (!filterItems.includes(value)) {
      filterItems.push(value)
    }
  });
 
 

 function update(e){
   props.updateFormState("requestedType", e.target.value);
 }

  function onUpdateSelected(e) {
    props.updateFormState( "selectedType", e.target.value)
  }


  
  return (
    <form className="filters">  
     <input 
     type="text" 
     placeholder="type" 
     value={props.requestedType}
     onChange={update}
     />
      <select value={props.selectedType} onChange={onUpdateSelected} >
        <option value="">-Select-</option>
        {filterItems.map(function(value, index){
          return (<option key={index} type={value}>{value}</option>);
        })}
    </select>

    
    </form>
  )
}

export   {Filters} ;