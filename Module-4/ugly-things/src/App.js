import React, {useContext} from 'react'
import './styles.css'
import {ImageList} from './context'
import Form from './Form'
import ImageCard from './ImageCard'

function App (props) {
    return (
        <div>
            <Form />
            {ImageList.map(image, i => <ImageCard key={i} title={image.title} image={image.url} comment={image.comment}/>)}
        </div>
    )
}