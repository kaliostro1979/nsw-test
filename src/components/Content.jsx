import React, {useEffect} from 'react'
import {Route} from "react-router";
import Page from "../pages/Page";



const Content = (props)=>{

    return (
        <div className="content">
            {
                props.pages ? props.pages.map((p)=>{
                    return <Route exact path={"/page-" +  p.id} component={()=><Page page={p}/>} key={Math.random()}/>
                }) : ''
            }
        </div>
    )
}

export default Content