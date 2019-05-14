import { ADD_PRODUCT } from '../actions/actionFilters'
const initState = { chores: [{ id: "ao1", type: "easy", description: "description Lorem ds msdfa iwkk soie owooeeo", addBy: "Kevin", postedOn: "02-Aug-2019" }] }



export function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
           console.log("update the number of things");
            return state;
        default: return state
    }
}