import React, {useState} from 'react'
const ImageContext = React.createContext()

const ImageContextProvider = (props) => {

  const [images, setImages] = useState([])

  return (
    <ImageContext.Provider value={{images, setImages}}>
      {props.children}
    </ImageContext.Provider>
  )
}

export {ImageContextProvider, ImageContext}