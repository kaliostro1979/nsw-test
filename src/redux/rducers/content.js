import {GET_ALL_ITEMS_CONTENT, SORT_ITEMS_BY_ID} from "../types";

export const contentReducer = (state = [], action)=>{
    switch (action.type){
        case SORT_ITEMS_BY_ID:
            return action.payload
        default:
            return state
    }
}