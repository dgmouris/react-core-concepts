import { ADD_PRODUCT } from "./actionFilters"


export const addProduct = (id) => {
    console.log("actions")
    return { type: ADD_PRODUCT}
}

// export const removeCounter = (index) => {
//     return { type: REMOVE_COUNTER, index }
// }

// export const updateCount = (obj) => {
//     return { type: UPDATE_COUNT, obj }
// }

