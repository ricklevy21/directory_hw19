import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import SearchNav from './components/SearchNav'
import DataContainer from './components/DataContainer'
import axios from 'axios'

function App() {
  //state hook. allows to have state inside of functional component
  const [employees, setEmployees] =useState([])
  //state hook for filtering employees. ([]) = initial state
  const [filteredEmployees, setFilteredEmployees] =useState([])

  //effect hook
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=50&nat=us")
        .then(res => {
          setEmployees(res.data.results)
          setFilteredEmployees(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    //method to filter the employees. WIll prop down to SearchNav. this is a functional component
    const employeeSearch = (searchInput) => {

        if (!searchInput) {
          setFilteredEmployees(employees)
        } else {
          const searchTerm = searchInput.toLowerCase()
          const  searchResults = employees.filter(employee => employee.name.first.toLowerCase().startsWith(searchTerm) || employee.name.last.toLowerCase().startsWith(searchTerm))
          setFilteredEmployees(searchResults)
        }
    }

  return (
    <div className="App">
        <Header />
      <div className="container">
        <SearchNav
        employeeSearch={employeeSearch}
        />
        <DataContainer
        //this is propping data into the datacontainer. calling the props employees, and fileteredEmployees is the hook
          employees={filteredEmployees}
        />
      </div>
    </div>
  );
}

export default App;
