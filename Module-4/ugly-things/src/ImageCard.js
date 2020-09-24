import React from 'react'

const ImageCard = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <img src={props.url} alt={props.description}/>
        </div>
    )
}

export default ImageCard