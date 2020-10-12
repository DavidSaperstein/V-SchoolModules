import React, {useState} from 'react'

const CommentForm = (props) => {
    const [newContent, setNewContent] = useState('')

    const handleAddComment = (e) => {
        e.preventDefault()
        props.setNewComments(prevComments => [
            ...prevComments, 
            {
                content: newContent, 
                id: props.nextCommentId
            }
        ])
        props.setNextCommentId(prevNextCommentId => prevNextCommentId + 1)
        setNewContent('')
        props.setCanAddComment(prevCanAddComment => !prevCanAddComment)
    }

    const handleEditComment = (e) => {
        e.preventDefault()
        props.setNewComments(prevComments => {
            const newComments = [...prevComments]
            const editting = newComments.findIndex(comment => comment.id === props.id)
            newComments[editting].content = newContent
            return newComments
        })
        setNewContent('')
        props.setCanEditComment(prevCanEditComment => !prevCanEditComment)
    }

    return (
        <div>
            <form 
                onSubmit={props.isEdit ? handleEditComment : handleAddComment}
                className={props.isEdit ? 'edit-comment' : 'add-comment'}
            >
                <input 
                    type='text' 
                    value={newContent} 
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <button>{props.isEdit ? 'Save' : 'Add'}</button>
            </form>
        </div>
    )
}

export default CommentForm