import React, { useState } from 'react'
import './comments.css'
import Comment from './Comment';

const NestedComments = () => {

    const [inputValue, setInputValue] = useState('');
    const [comments, setComments] = useState([
        {
            id: 1,
            title: 'This is first comment',
            children: [
                {
                    id: 2,
                    title: 'This is child comment 1',
                    children: [
                        {
                            id: 5,
                            title: 'Sub Child',
                            children: []
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'This is child comment 2',
                    children: []
                },
                {
                    id: 4,
                    title: 'This is child comment 3',
                    children: []
                }
            ]
        }
    ]);

    function handleAddReply(currentParentId, currentReply) {
        let cpyComments = [...comments];
        handleAddNewComment(cpyComments, currentParentId, currentReply);
        setComments(cpyComments);
    }

    function newComment(text) {
        return {
            id: new Date().getTime(),
            title: text,
            children: []
        }
    }

    function handleAddNewComment(updatedComments, currentParentId, currentReply) {
        for (let i = 0; i < updatedComments.length; i++) {
            let comment = updatedComments[i];
            if (comment.id === currentParentId) {
                comment.children.unshift(newComment(currentReply));
            }
        }

        for (let i = 0; i < updatedComments.length; i++) {
            let comment = updatedComments[i];
            handleAddNewComment(comment.children, currentParentId, currentReply);
        }
    }

    return (
        <div className='nested-comment-container'>
            <h1>Nested Comments</h1>
            <div className='comment-wrapper'>
                <textarea
                    rows={'5'}
                    cols={'90'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <br />
                <button
                    disabled={inputValue === ''}
                    onClick={() => {
                        setComments([newComment(inputValue), ...comments]);
                        setInputValue('');
                    }} className='add-comment-btn'>Add Comment</button>
            </div>
            <ul>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment} handleAddReply={handleAddReply} />)
                }
            </ul>
        </div>
    )
}

export default NestedComments