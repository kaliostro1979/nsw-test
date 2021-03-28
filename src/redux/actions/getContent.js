import {SORT_ITEMS_BY_ID} from "../types";
import {getAllItems} from "./getAllItems";

export const sortItems = (e) => {
    const filterName = e.target.innerText.toLowerCase()
    return async (dispatch) => {
        const items = await fetch('http://localhost:3000/state.json')
            .then(res => res.json())
        dispatch(getAllItems(items))
        const filteredItems = items.map((e) => {
            const pageContent = e.content
            const filteredPageContent = pageContent.filter((cont) => {
                if (cont.status === filterName) {
                    return cont
                }
            })
            e.content = filteredPageContent
            return e
        })
        dispatch(sortItemById(filteredItems))
    }
}


export const sortItemById = (items) => {
    return (
        {
            type: SORT_ITEMS_BY_ID,
            payload: items
        }
    )
}