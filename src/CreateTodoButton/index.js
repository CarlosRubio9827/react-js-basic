import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (msg) => {
        alert(msg)
    }


    return (
        <button
            className="CreateTodoButton"
            type="button"
            onClick={() => {
                    onClickButton("Ejemplo de click")
                }
            }
        >
            +
        </button>
    )
}

export { CreateTodoButton };