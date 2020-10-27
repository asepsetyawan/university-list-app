import React, {useState} from 'react'
import {func} from 'prop-types'

const Search = ({handleSearch}) => {
    const [searchKey, setSearchKey] = useState('')

    const handleChangeInput = e => {
        setSearchKey(e.target.value)
    }

    const handleSubmitSearch = e => {
        e.preventDefault()
        handleSearch(searchKey)
    }

    return (
        <form onSubmit={handleSubmitSearch}>
            <input type="text" id="search" placeholder="Search University Name" onChange={handleChangeInput} />
            <button type="submit">Search</button>
        </form>
    )
}

Search.propTypes = {
    handleSearch: func
}

export default Search