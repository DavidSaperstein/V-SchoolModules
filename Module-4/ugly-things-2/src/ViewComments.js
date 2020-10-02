import React from 'react'
import CommentCard from './CommentCard'

const ViewComments = (props) => {
    return (
        <div>
            {props.comments.map(comment => 
                <CommentCard 
                    content={comment.content}
                    id={comment.id}
                    key={comment.id}
                    setNewComments={props.setNewComments}
                />
            )}
        </div>
    )
}

export default ViewComments