import React from 'react'
import {NavLink} from "react-router-dom";



const SideNavBar = (props)=>{

    return (
        <div className="side-navigation">
            <ul>
                {
                    props.pages ? props.pages.map((p)=>{
                        return (
                            <li key={Math.random()}>
                                <NavLink to={"/page-" + p.id}>
                                    <div className="nav-item__icon">
                                        <img src={p.icon} alt=""/>
                                    </div>
                                </NavLink>
                            </li>
                        )
                    }) : ''
                }
            </ul>

        </div>
    )
}


export default SideNavBar