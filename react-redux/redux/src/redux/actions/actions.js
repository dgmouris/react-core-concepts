import { ADD_ARTICLE, REMOVE_ARTICLE } from "./action-types"

export function addArticle(payload) {
    console.log(`Add Article ......... ${payload}`)
    return { type: ADD_ARTICLE, payload }
};

export function removeArticle(payload){
    console.log(`Remove Article ......... ${payload}`)
    return {type: REMOVE_ARTICLE, payload}
}