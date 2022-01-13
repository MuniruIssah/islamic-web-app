import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.scss'
const Search = () => {
    return (
        <form>
            <input type='search' placeholder='Search' />
            <button><FiSearch/></button>  
        </form>
    )
}

export default Search
