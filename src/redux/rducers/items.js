import {GET_ALL_ITEMS, SORT_ITEMS_BY_ID} from "../types";

const initialState = []

export const itemsReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_ALL_ITEMS:
            return action.payload
        case SORT_ITEMS_BY_ID:
            return action.payload
        default:
            return state
    }
}