import React, {useContext} from 'react'
import {FormContext} from './context'

const Form = (props) => {
    const {title, setTitle, url, setUrl, description, setDescription, submit} = useContext
    (FormContext)
    console.log(setTitle)
    return (
        <form onSubmit={submit}>
            <div className='input-container'>
                <input name='title' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <input name='url' value={url} placeholder='Url' onChange={(e) => setUrl(e.target.value)}/>
                <input name='description' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form
