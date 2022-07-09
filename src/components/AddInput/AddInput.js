import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import TodoList from '../TodoList/TodoList'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
                data-testid="add-todo-input"
            />
            <button 
                className="add-btn"
                onClick={addTodo}
                data-testid="add-todo-btn"
            >
                Add
            </button>
        </div>
    )
}

export default AddInput
