import React, {useContext, useState} from 'react'
import {FormContext} from './context'
import ImageList from './ImageList'

const Form = (props) => {
  const {title, setTitle, url, setUrl, description, setDescription, submit, images, setImages} = useContext
  (FormContext)
  
  const [newTitle, setNewTitle] = useState(props.title)
  const [newUrl, setNewUrl] = useState(props.url)
  const [newDescription, setNewDescription] = useState(props.description)
  
  const handleSave = (e) => {
    e.preventDefault()
    const editting = images.findIndex(image => image.id === props.id)
    const newImages = [...images]
    newImages[editting].title = newTitle
    newImages[editting].url = newUrl
    newImages[editting].description = newDescription
    setImages(newImages)
    props.setCanEdit(false)
  }

  return (
    <div>
      {props.isEdit === false ? (
        <form className='header-form' onSubmit={submit}>
          <div className='input-container'>
            <input name='title' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} required/>
            <input name='url' value={url} placeholder='Url' onChange={(e) => setUrl(e.target.value)} required/>
            <input name='description' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} required/>
          </div>
          <button>Submit</button>
        </form>
      ) : ( 
        <form className='edit-form'onSubmit={handleSave}>
          <div className='edit-input-container'>
            <div className='edit-inputs'>
              <label className='card'>Title: </label>
              <input name='title' value={newTitle} placeholder='Title' onChange={(e) => setNewTitle(e.target.value)} className='card edit-input' required/>
            </div>
            <div className='edit-inputs'>
              <label className='card'>Url: </label>
              <input name='url' value={newUrl} placeholder='Url' onChange={(e) => setNewUrl(e.target.value)} className='card edit-input' required/>
            </div>
            <div className='edit-inputs'>
              <label className='card'>Description: </label>
              <input name='description' value={newDescription} placeholder='Description' onChange={(e) => setNewDescription(e.target.value)} className='card edit-input' required/>
            </div>
          </div>
          <button>Save</button>
        </form>
      )}
    </div>
  )
}

export default Form
