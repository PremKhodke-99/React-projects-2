import { Button, List, ListItem, ListItemText } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../../firebase'

const Todo = ({ todo, setCurrentEditedTodoID, setInputValue }) => {

    function handleDelete(id) {
        deleteDoc(doc(db, 'todos', id))
    }

    return (
        <List>
            <ListItem>
                <ListItemText primary={todo?.todoItem?.todo} />
            </ListItem>
            <Button
                onClick={() => handleDelete(todo.id)}
                variant='contained'
                color='secondary'
            >Delete</Button>
            <Button
                onClick={() => {
                    setInputValue(todo.todoItem.todo)
                    setCurrentEditedTodoID(todo.id)
                }}
                variant='contained'
                color='info'
            >Edit</Button>
        </List>
    )
}

export default Todo