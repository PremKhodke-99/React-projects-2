import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Todo from './todo';
import './todo.css'

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));

function FirebaseTodo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [currentEditedTodoID, setCurrentEditedTodoID] = useState(null);

    useEffect(() => {
        onSnapshot(q, (snapShot) => {
            setTodos(
                snapShot.docs.map(docItem => ({
                    id: docItem.id,
                    todoItem: docItem.data()
                }))
            )
        })
    }, [inputValue]);

    function handleAddOrEditTodo(e) {
        e.preventDefault();
        currentEditedTodoID !== null
            ? updateDoc(doc(db, 'todos', currentEditedTodoID), {
                todo: inputValue,
            }) : addDoc(collection(db, 'todos'), {
                todo: inputValue,
                timestamp: serverTimestamp()
            });

        setInputValue('');
        setCurrentEditedTodoID(null);
    }

    console.log(todos, 'prem');

    return (
        <div className='firebase-todo-wrapper'>
            <h1>Firebase Todo Application</h1>
            <form onSubmit={handleAddOrEditTodo}>
                <TextField
                    id="todo"
                    label="Create Todo"
                    variant="outlined"
                    size='small'
                    
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type='submit' variant='contained' color='primary'>
                    {
                        currentEditedTodoID !== null ? 'Edit Todo' : 'Add Todo'
                    }
                </Button>
            </form>
            <ul>
                {
                    todos?.length > 0 ? todos.map(todo => (
                        <Todo setInputValue={setInputValue} setCurrentEditedTodoID={setCurrentEditedTodoID} todo={todo} />
                    )) : (<h3>No todos available</h3>)
                }
            </ul>
        </div>
    )
}

export default FirebaseTodo