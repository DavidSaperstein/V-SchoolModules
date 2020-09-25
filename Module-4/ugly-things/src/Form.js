import React, {useContext} from 'react'
import {FormContext} from './context'

const Form = (props) => {
    const {title, setTitle, url, setUrl, description, setDescription, submit} = useContext
    (FormContext)
    console.log(setTitle)
    return (
        <form onSubmit={submit} className='form'>
            <input name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input name='url' value={url} onChange={(e) => setUrl(e.target.value)}/>
            <input name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}

export default Form
