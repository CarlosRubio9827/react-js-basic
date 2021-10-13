import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    const OnSearchValueChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
        console.log('Search Value: ' + searchValue)

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


