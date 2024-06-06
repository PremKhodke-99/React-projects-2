import React, { useState } from 'react'

const Comment = ({ comment, key, handleAddReply }) => {

    const [reply, setReply] = useState('');
    const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

    return (
        <li key={key}>
            <p>{comment.title}</p>
            {
                !showReplyCommentBox && <button onClick={() => setShowReplyCommentBox(true)}>Add Reply</button>
            }
            {
                showReplyCommentBox && <div>
                    <textarea rows={'2'} cols={'20'} onChange={(e) => setReply(e.target.value)} value={reply} />
                    <br />
                    <div className='reply-buttons-container'>
                        <button
                        disabled={reply === ''}
                        onClick={() => {
                            handleAddReply(comment.id, reply);
                            setShowReplyCommentBox(false);
                            setReply('');
                        }}>Submit</button>
                        <button onClick={() => {
                            setShowReplyCommentBox(false)
                            setReply('')
                        }}>Cancel</button>
                    </div>
                </div>
            }
            {
                comment?.children?.length > 0 && <ul>
                    {
                        comment.children.map(childComment => <Comment key={childComment.id} comment={childComment} handleAddReply={handleAddReply} />)
                    }
                </ul>
            }
        </li >
    )
}

export default Comment