import React, {useContext, useState} from 'react'
import {ImageContext} from './imageContext'
import ImageForm from './ImageForm'
import CommentForm from './CommentForm'
import ViewComments from './ViewComments'

const ImageCard = (props) => {
    
    const {setImages} = useContext(ImageContext)

    const [canEdit, setCanEdit] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [url, setUrl] = useState(props.url)
    const [description, setDescription] = useState(props.description)
    const [newComments, setNewComments] = useState([])
    const [nextCommentId, setNextCommentId] = useState(1)
    const [canAddComment, setCanAddComment] = useState(false)

    const handleDelete = () => {
        setImages(prevImages => {
            return prevImages.filter(image => image.id !== props.id)
        })
    }

    return (
        <div className='cards'>
            <h1 style={{height: '30px'}}>{props.title}</h1>
            <h1>{props.description}</h1>
            <img 
                alt={"Not Found"}
                src={props.url} 
            />
            <ViewComments 
                comments={newComments} 
                setNewComments={setNewComments}
            />
            {canAddComment ? (
                <CommentForm 
                    isEdit={false}
                    nextCommentId={nextCommentId}
                    setNewComments={setNewComments}
                    setCanAddComment={setCanAddComment}
                    setNextCommentId={setNextCommentId}
                />
            ) : (
                <button onClick={(e) => setCanAddComment(!canAddComment)}>
                    Add Comment
                </button>
            )}
            {canEdit ? (
                <ImageForm 
                    description={props.description}
                    id={props.id}
                    initialState={{
                        description: props.description,
                        title: props.title,
                        url: props.url
                    }}
                    isEdit={canEdit}
                    setCanEdit={setCanEdit}
                    title={props.title}
                    url={props.url}
                />
            ) : (
                <>
                    <button onClick={() => setCanEdit(!canEdit)}>Edit</button>
                    <button onClick={() => handleDelete()}>Delete</button>
                </>
            )}
        </div>
    )
}

export default ImageCard