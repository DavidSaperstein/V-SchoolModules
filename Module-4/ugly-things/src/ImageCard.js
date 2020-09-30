import React, {useContext, useState} from 'react'
import {FormContext} from './context'
import Form from './Form'

const ImageCard = (props) => {
  const {images, setImages} = useContext(FormContext)

  const [canEdit, setCanEdit] = useState(false)
  const [addingComment, setAddingComment] = useState(false)
  const [newCommentString, setCommentString] = useState('')
  const [nextCommentId, setNextCommentId] = useState(1)
  const [comments, setComments] = useState([])
  const [canEditComment, setCanEditComment] = useState(false)


  React.useEffect(() => {
    // console.log(images)
    images.forEach(image => console.log(image))
  }, [images])

  const handleDelete = (id) => {
    console.log(id)
    const newImages = images.filter(image => image.id !== id)
    setImages(newImages)
  }

  const handleEdit = (id) => {
    canEdit ? setCanEdit(false) : setCanEdit(true)
  }

  const handleAddComment = () => {
    setAddingComment(true)
  }

  const saveComment = (e) => {
    e.preventDefault()
    setComments(prevComments => [...prevComments, {content: newCommentString, id: nextCommentId}])
    setNextCommentId(nextCommentId + 1)
    setCommentString('')
    setAddingComment(false)
  }

  const deleteComment = (id) => {
    const newComments = (comments.filter(comment => comment.id !== id))
    setComments(newComments)
  }

  const handleEditComment = () => {
    setCanEditComment(true)
  }

  const editComment = (id, e) => {
    e.preventDefault()
    const newComments = [...comments]
    const beingEdited = newComments.findIndex(comment => comment.id === id)
    newComments[beingEdited].content = newCommentString
    setComments(newComments)
    setCommentString('')
    setCanEditComment(false)
  }

  return (
    <div className='image-card'>
      <h1 className='card-h1 title card'>{props.title}</h1>
      <h1 className='card-h1 description card'>{props.description}</h1>
      <img 
        alt={props.description} 
        className='card' 
        src={props.url} 
        style={{marginBottom: '10px'}}
      />

      {comments.map(comment => (
        canEditComment && !addingComment ? (
          <>
            <form onSubmit={(e) => editComment(comment.id, e)}>
              <input
                onChange={(e) => setCommentString(e.target.value)}
                type='text'
                value={newCommentString}
              />
              <button>
                Save
              </button>
            </form>
          </>
        ) : (
        <>
          <p style={{color: 'ivory'}}>{comment.content}</p>
          <button
            className='card edit-comment'
            disabled={addingComment}
            onClick={() => handleEditComment()}
            type='button'
          >
            Edit
          </button>  
          <button 
            className='card delete-comment'
            onClick={() => deleteComment(comment.id)} 
            type='button'
          >
            X
          </button>
        </>
        )
      ))}
      {/* probably should be a reusable form for both edit and create. also comments should have been its own component. */}
      {addingComment && !canEditComment ? (
        <form onSubmit={saveComment}>
          <input 
            onChange={(e)=>setCommentString(e.target.value)}
            type='text' 
            value={newCommentString} 
          />
          <button>
            Save Comment
          </button>
        </form>
      ) : (  
        <button 
          className='card add-comment'
          disabled={canEditComment}
          onClick={() => handleAddComment()} 
          type='button' 
        >
          Add Comment
        </button>
      )}

      {canEdit ? (
        <Form 
          isEdit={true} 
          setCanEdit={setCanEdit} 
          title={props.title} 
          url={props.url} 
          description={props.description}
          id={props.id}
        />
      ) : (
        <div className='buttons'>
          <button 
            type='button' 
            onClick={() => handleDelete(props.id)} 
            className='card'
          >
            Delete
          </button>
          <button 
            type='button' 
            onClick={() => handleEdit(props.id)} 
            className='card edit'
          >
            Edit
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageCard