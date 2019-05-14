import {ADD_COUNTER, REMOVE_COUNTER, UPDATE_COUNT} from "./actionFilters" 


export const addCounter = (id)=>{
 return {type:ADD_COUNTER, id}
} 

export const removeCounter =(index)=>{
  return {type:REMOVE_COUNTER, index}
}

export const updateCount =(obj)=>{
  return {type:UPDATE_COUNT, obj}
}

 