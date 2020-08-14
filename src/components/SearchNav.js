//dependencies
import React, {useState} from 'react'

function SearchNav( {employeeSearch} ) {
    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <form className="col-12">
                <input
                className="form-control"
                type="text"
                placeholder="Search By Name"
                aria-label="Search"
                onChange={(e) => {
                    //setting the search term to whaever is typed into the form
                    employeeSearch(e.target.value)
                }}
                name="search"
                id="search"
                />
            </form>
        </nav>
        <br />
        </>
    )
}

export default SearchNav