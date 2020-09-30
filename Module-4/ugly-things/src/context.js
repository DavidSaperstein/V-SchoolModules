import React, {useState} from 'react'
const FormContext = React.createContext()

const FormContextProvider = (props) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])
  const [nextId, setNextId] = useState(1)

  const submit = (e) => {
    e.preventDefault()
    setImages(prevImages => [...prevImages, {title, url, description, id: nextId}])
    setNextId(nextId + 1)
    setTitle('')
    setUrl('')
    setDescription('')
  }

  return (
    <FormContext.Provider 
      value={{
        title, 
        setTitle, 
        url, 
        setUrl, 
        description, 
        setDescription, 
        images, 
        setImages, 
        submit
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}

export {FormContextProvider, FormContext}