import {ADD_USER} from "../actions/constants"
import initialState from "./initialstore"
 
console.log("initial state is: ", initialState)
const  reducers =(state = initialState, action)=>{
      switch(action.type){
      case ADD_USER:  
      console.log("Reducer Will Now", action.type);
      return state
      
       default:

           return state
      }

    
}

export default reducers