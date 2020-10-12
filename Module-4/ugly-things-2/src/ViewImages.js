import React, {useContext} from 'react'
import {ImageContext} from './imageContext'
import ImageCard from './ImageCard'

const ViewImages = (props) => {

    const {images} = useContext(ImageContext)

    return (
        <div className='view-images'>
            {images.map(image => 
                <ImageCard 
                    title={image.title}
                    description={image.description}
                    url={image.url}
                    id={image.id}
                  // Fixing the "key" prop warning  
                    key={image.id}
                />
            )}
        </div>
    )
}

export default ViewImages