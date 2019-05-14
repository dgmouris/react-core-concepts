import {ADD_COUNTER, REMOVE_COUNTER, UPDATE_COUNT} from '../actions/actionFilters'
const initState = {counters:[]}
 
export function reducer (state=initState, action){
  switch(action.type){
    case ADD_COUNTER: 
    return Object.assign({}, state, {counters: [...state.counters, action.id]});


    case REMOVE_COUNTER:  
    const newState =  [...state.counters.slice(0,action.index), ...state.counters.slice(action.index+1)]
    return Object.assign({}, state, {counters: newState});
   
    case UPDATE_COUNT: 
    const updateCounter = state.counters[action.obj.index]
    const newValue = updateCounter.count + action.obj.value;
    const updatedCounterState = Object.assign({}, updateCounter,{count:newValue})
    const upgradedState =  [...state.counters.slice(0,action.obj.index),updatedCounterState, ...state.counters.slice(action.obj.index+1)]
    return Object.assign({}, state, {counters: upgradedState});
    
    default: return state
  }
}