import React, {useState} from 'react'
const FormContext = React.createContext

const FormContextProvider = (props) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])

    const submit = () => {
        setImages = (prevImages => [...prevImages, {title, url, description}])
    }

    return (
        <FormContextProvider value={title, url, description, images, submit}>
            {props.children}
        </FormContextProvider>
    )
}

export {FormContextProvider, FormContext}