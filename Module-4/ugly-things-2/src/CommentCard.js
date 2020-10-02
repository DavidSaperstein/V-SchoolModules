import React, {useState} from 'react'
import CommentForm from './CommentForm'

const CommentCard = (props) => {
    
    const [canEditComment, setCanEditComment] = useState(false)

    return (
        <div>
            {canEditComment ? (
                <CommentForm
                content={props.content}
                id={props.id}
                isEdit={canEditComment}
                setCanEditComment={setCanEditComment}
                setNewcomments={props.setNewcomments}
                />
            ) : (
                <p>{props.content}</p>                    
            )}
            <button onClick={(e) => setCanEditComment(!canEditComment)}>Edit</button>
            <button>X</button>
        </div>
    )
}

export default CommentCard