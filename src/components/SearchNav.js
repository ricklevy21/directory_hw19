//dependencies
import React from 'react'

function SearchNav() {
    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <form className="col-12">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </nav>
        <br />
        </>
    )
}

export default SearchNav