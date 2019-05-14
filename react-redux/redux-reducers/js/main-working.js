let initState = {items:[{id:0, item:"shoes"}]};
const component = document.getElementById('root')
component.innerText="waiting for update"
// //#endregion
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

let newItemIndex=1;
// action function return object with type and payload
function addItem(item){
    return {type:ADD_ITEM,payload:{id:newItemIndex++, item}}
}

function removeItem(id){
    return {type:REMOVE_ITEM,payload:{id}}
}


  function reducer(state=[], action){   
    switch(action.type){
      case ADD_ITEM: 
      const { id, item } = action.payload;
       return  Object.assign({}, state, {items:[...state.items,{id,item}]} )
       case REMOVE_ITEM: 
       return(state.items.filter((item, index)=>{
           if(index !== action.payload.id){
                  return item
           }
       }) )         
      default: return state
    }  
}

const {createStore} = Redux;
const store = createStore(reducer, initState);

console.log(store.getState())

store.dispatch(addItem("thongs for phyllis"))
console.log(store.getState().items[0].item)
const render =()=>{
    component.innerText = store.getState().items[0]
}
store.subscribe(render);
render()
