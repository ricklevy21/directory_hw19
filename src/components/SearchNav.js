//dependencies
import React from 'react'

function SearchNav() {
    return (
        <nav className="navbar navbar-light bg-light center">
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </nav>
    )
}

export default SearchNav