import React, {useContext} from 'react'
import {FormContext} from './context'

const ImageCard = (props) => {
    const {images, setImages} = useContext(FormContext)

    const handleDelete = (id) => {
        const newImages = images.filter((image) => image.id != id)
        console.log(images)
        console.log(newImages)
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <img src={props.url} alt={props.description}/>
            <button type='button' onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default ImageCard