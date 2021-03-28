import {GET_ALL_ITEMS, GET_ALL_ITEMS_CONTENT, SORT_ITEMS_BY_ID} from "../types";


export const fetchItems = () => {
    return async (dispatch) => {
        const items = await fetch('http://localhost:3000/state.json')
            .then(res => res.json())
        dispatch(getAllItems(items))
    }
}



export const getAllItems = (items) => {
    return ({
        type: GET_ALL_ITEMS,
        payload: items
    })
}



