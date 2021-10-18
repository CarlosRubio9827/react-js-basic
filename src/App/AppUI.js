import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { NavBar } from '../NavBar';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <NavBar />
            <TodoCounter />
            <TodoSearch />
             
                    <TodoList>
                        {error && <TodosError error={error} />}
                        {loading && <TodosLoading />}
                        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
                        {searchedTodos.map(todo => (
                            <TodoItem
                                completed={todo.completed}
                                key={todo.text}
                                text={todo.text}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
            {openModal && (
                <Modal >
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>

    );
}


export default AppUI;