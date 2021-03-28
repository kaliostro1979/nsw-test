import React from 'react'
import FilterBar from "../components/FilterBar";
import SideNavBar from "../components/SideNavBar";
import Content from "../components/Content";


const MainLayout = (props)=>{
    return (
        <div id="main">
                <FilterBar/>
                <SideNavBar pages={props.pages}/>
                <Content pages={props.pages}/>
        </div>
    )
}

export default MainLayout