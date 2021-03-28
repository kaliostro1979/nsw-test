import React from 'react'


const ContentBlock = (props)=>{
    return (
        <div className="content-block-item" style={{backgroundImage: `url(${props.image ? props.image : ''})`}}>
            <h3>{props.name}</h3>
        </div>
    )
}

export default ContentBlock