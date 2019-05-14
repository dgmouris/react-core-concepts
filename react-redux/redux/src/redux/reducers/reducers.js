// import InitialState from "../store/initialState";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actions/action-types"

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log(`Add Artice Reducer Function: `, ${action.payload} );
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
              });
              case REMOVE_ARTICLE:
              console.log("now remove an artilce");
              return state
        default:
            return state;
    }

};


export default rootReducer;