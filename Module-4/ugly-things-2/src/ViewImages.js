import React, {useContext} from 'react'
import {ImageContext} from './imageContext'
import ImageCard from './ImageCard'

const ViewImages = (props) => {

    const {images, setImages} = useContext(ImageContext)
    console.log(images)

    return (
        <div>
            {images.map(image => 
                <ImageCard 
                    title={image.title}
                    description={image.description}
                    url={image.url}
                    id={image.id}
                />
            )}
        </div>
    )
}

export default ViewImages