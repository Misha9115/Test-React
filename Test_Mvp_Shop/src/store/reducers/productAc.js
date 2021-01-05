
import {
    RETURN_LIST,
    DELETE_ALL,
    ADD_NEW_PRODACT,
    DELET_ONE,
    READ_DATA
} from "../action/action_Types";


const initialState = {
    posts: ['n'],
    statusADMIN: true
}


export default function (state = initialState, action) {

    switch (action.type) {

        case RETURN_LIST: return action.data;

      
        case DELETE_ALL:
            return {
                ...state, posts: []
            }
        
        case READ_DATA:
            return {
                ...state, posts: [ ...action.data]
            }
          
        case ADD_NEW_PRODACT:
            return {
                ...state, posts: [...state.posts, action.data]
            }
         
        case DELET_ONE:
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.id)
            }
       

        default: return state;
    }
}