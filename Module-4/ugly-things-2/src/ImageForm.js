import React, {useState, useContext} from 'react'
import {ImageContext} from './imageContext.js'

const ImageForm = (props) => {

  //state === bastardized useReducer
  const {isEdit, title, url, description, id, setCanEdit, initialState} = props  
  const [newTitle, setNewTitle] = useState(initialState.title)
  const [newUrl, setNewUrl] = useState(initialState.url)
  const [newDescription, setNewDescription] = useState(initialState.description)
  const [nextId, setNextId] = useState(1)
  const {images, setImages} = useContext(ImageContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setImages(prevImages => [
      ...prevImages, 
      {
        title: newTitle, 
        url: newUrl, 
        description: newDescription, 
        id: nextId
      }
    ])
    setNextId(nextId + 1)
    setNewTitle('')
    setNewUrl('')
    setNewDescription('')
    console.log(images)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setImages(prevImages => {
      const newImages = [...prevImages]
      const editting = newImages.findIndex(image => image.id === id)
      newImages[editting].title = newTitle
      newImages[editting].url = newUrl
      newImages[editting].description = newDescription
      return newImages
    })
    setNewTitle('')
    setNewUrl('')
    setNewDescription('')
    setCanEdit(false)  
  }

  return (
    <div>
      <form
        className={isEdit ? 'edit-form' : 'image-form'}
        onSubmit={isEdit ? handleSave : handleSubmit}
      >
        <div className={isEdit ? 'comment-form-inputs' : 'image-form-inputs'}>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            type='text'
            value={newTitle}
            placeholder="Title"
          />
          <input
            onChange={(e) => setNewUrl(e.target.value)}
            type='text'
            value={newUrl}
            placeholder="Image URL"
          />
          <input
            onChange={(e) => setNewDescription(e.target.value)}
            type='text'
            value={newDescription}
            placeholder="Description"
          />
        </div>
          <button>{isEdit ? 'Save' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default ImageForm