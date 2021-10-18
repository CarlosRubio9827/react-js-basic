import React from 'react'
import './TodoForm.css'
import {TodoContext} from '../TodoContext'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = ()=>{
        setOpenModal(false)
    }
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <form className="TodoForm" onSubmit={ onSubmit }>
            <label className="TodoForm-title" htmlFor="name-todo">Name TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                maxLength="50"
                className="TodoForm-description"
                id="name-todo" 
                placeholder="Cortar cebolla para el almuerzo"
            />
            <div className="TodoForm-container">
                <button className="TodoForm-cancel"
                    type='button'
                    onClick={onCancel}
                    >
                    Cancelar
                </button>
                <button
                    className="TodoForm-add"
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}