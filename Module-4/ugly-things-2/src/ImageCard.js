import React, {useContext, useState} from 'react'
import {ImageContext} from './imageContext'
import ImageForm from './ImageForm'
import CommentForm from './CommentForm'
import ViewComments from './ViewComments'

const ImageCard = (props) => {
    
    const {setImages} = useContext(ImageContext)

    const [canEdit, setCanEdit] = useState(false)
    const [newComments, setNewComments] = useState([])
    const [nextCommentId, setNextCommentId] = useState(1)
    const [canAddComment, setCanAddComment] = useState(false)

    const handleDelete = () => {
        setImages(prevImages => {
            return prevImages.filter(image => image.id !== props.id)
        })
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
            <img 
                alt={"Not Found"}
                src={props.url ? props.url : 'https://http.cat/404'} 
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