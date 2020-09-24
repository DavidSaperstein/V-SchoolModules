import React, {useContext} from 'react'
import './styles.css'
import {FormContext} from './context'
import Form from './Form'
import ImageCard from './ImageCard'

function App (props) {
    const {images} = useContext(FormContext)
    return (
        <div>
            <Form />
            {images.map(image, i => <ImageCard key={i} title={image.title} image={image.url} description={image.description}/>)}
        </div>
    )
}