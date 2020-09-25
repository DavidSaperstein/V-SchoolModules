import React, {useContext} from 'react'
import {FormContext} from './context'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const {images} = useContext(FormContext)
    return (
        <div>
            {images && images.length > 0 && (
                images.map((image, i) => 
                    <ImageCard 
                        key={i}
                        title={image.title}
                        url={image.url}
                        description={image.description}
                    />
            ))}
        </div>
    )
}

export default ImageList