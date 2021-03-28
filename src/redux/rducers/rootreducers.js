import {combineReducers} from "redux";
import {itemsReducer} from "./items";

export const rootReducers = combineReducers({
    items: itemsReducer
})