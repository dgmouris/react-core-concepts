import {ADD_USER} from './constants'



export  const addUser = (payload)=>{
    console.log(`Add User ......... ${payload}`);
    return { type: ADD_USER, payload }
}