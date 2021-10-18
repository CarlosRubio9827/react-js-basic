import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const OnSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Search"
            value={searchValue}
            onInput={
                OnSearchValueChange
            }
        />
    )
}


export { TodoSearch };


