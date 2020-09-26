import React, {useState} from 'react'
const FormContext = React.createContext()

const FormContextProvider = (props) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])

    const submit = (e) => {
        e.preventDefault()
        setImages(prevImages => [...prevImages, {title, url, description}])
    }

    return (
        <FormContext.Provider value={{title, setTitle, url, setUrl, description, setDescription, images, setImages, submit}}>
            {props.children}
        </FormContext.Provider>
    )
}

export {FormContextProvider, FormContext}