import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/actions/getAllItems";
import {sortItems} from "../redux/actions/getContent";



const FilterBar = ()=>{
    const dispatch = useDispatch()






    return (
        <div className="filter-panel">
           <ul>
               <li onClick={()=>{dispatch(fetchItems())}}>All</li>
               <li onClick={(e)=>{dispatch(sortItems(e))}}>New</li>
               <li onClick={(e)=>{dispatch(sortItems(e))}}>Best</li>
           </ul>
        </div>
    )
}


export default FilterBar