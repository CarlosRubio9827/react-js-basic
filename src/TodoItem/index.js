import React from 'react';
import './TodoItem.css';

function TodoItem(props) {



    return (
        <li className="TodoItem">
            <span
                className={`TodoItem-check ${props.completed && 'TodoItem-check-completed'} `}
                onClick={props.onComplete}
            >ᄼ</span>
            <p className={`TodoItem-name ${props.completed && 'TodoItem-name-completed'}`}>{props.text}</p>
            <span
                className="TodoItem-close"
                onClick={props.onDelete}
            >X</span>
        </li>
    )
}

export { TodoItem }