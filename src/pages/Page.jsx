import React from "react";
import ContentBlock from "../components/ContentBlock";

const Page = (props)=>{



    return(
        <div className="content-main">
            <h1>Page-{props.page.id}</h1>
            {
                props.page.content ? props.page.content.map((cont)=>{
                    return <ContentBlock image={cont.image} name={cont.name} key={cont.id}/>
                }): ''
            }
        </div>
    )
}

export default Page