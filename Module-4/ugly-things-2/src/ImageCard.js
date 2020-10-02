import React, {useContext, useState} from 'react'
import {ImageContext} from './imageContext'
import ImageForm from './ImageForm'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import ViewComments from './ViewComments'

const ImageCard = (props) => {
    
    const {images, setImages} = useContext(ImageContext)

    const [canEdit, setCanEdit] = useState(false)
    const [newComments, setNewComments] = useState([])
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
                alt={props.description}
                src={props.url} 
            />
            <ViewComments comments={newComments} setNewComments={setNewComments}/>
            {canAddComment ? (
                <CommentForm 
                    isEdit={false}
                    setNewComments={setNewComments}
                    setCanAddComment={setCanAddComment}
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
                    <button 
                        onClick={() => setCanEdit(!canEdit)}
                    >
                        Edit
                    </button>
                    <button onClick={() => handleDelete()}>Delete</button>
                </>
            )}
        </div>
    )
}

export default ImageCard