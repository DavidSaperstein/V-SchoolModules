import React, {useState} from 'react'
import CommentForm from './CommentForm'

const CommentCard = (props) => {
    
    const [canEditComment, setCanEditComment] = useState(false)

    const handleDelete = (e) => {
        e.preventDefault()
        props.setNewComments(prevNewComments => {
            return prevNewComments.filter(comment => comment.id !== props.id)
        })
    }

    return (
        <div>
            {canEditComment ? (
                <CommentForm
                content={props.content}
                id={props.id}
                isEdit={canEditComment}
                setCanEditComment={setCanEditComment}
                setNewComments={props.setNewComments}
                />
            ) : (
                <p>{props.content}</p>                    
            )}
            <button onClick={(e) => setCanEditComment(!canEditComment)}>
                Edit
            </button>
            <button onClick={handleDelete}>
                X
            </button>
        </div>
    )
}

export default CommentCard