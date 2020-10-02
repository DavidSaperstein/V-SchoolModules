import React, {useContext} from 'react'
import {ImageContext} from './imageContext'
import ImageCard from './ImageCard'

const ViewImages = (props) => {

    const {images} = useContext(ImageContext)
    const {title, description, url, id} = images

    return (
        <div>
            {images.map(image => 
                <ImageCard 
                    title={title}
                    description={description}
                    url={url}
                    id={id}
                  // Fixing the "key" prop warning  
                    key={id}
                />
            )}
        </div>
    )
}

export default ViewImages