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
  //state hook for sorting employees by name
  const [sortedEmployees, setSortedEmployees] = useState([])

  //effect hook
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=50&nat=us")
        .then(res => {
          setEmployees(res.data.results)
          setFilteredEmployees(res.data.results)
          setSortedEmployees(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    //method to filter the employees by name. WIll prop down to SearchNav. this is a functional component
    const employeeSearch = (searchInput) => {

        if (!searchInput) {
          console.log('reseting state')
          setFilteredEmployees(employees)
        } else {
          const searchTerm = searchInput.toLowerCase()
          const  searchResults = employees.filter(employee => employee.name.first.toLowerCase().startsWith(searchTerm) || employee.name.last.toLowerCase().startsWith(searchTerm))
          setFilteredEmployees(searchResults)
        }
    }

    //method to sort employees by name. Will prop down to DataTable. this is a functional component
    const employeeSort = () => {
      console.log('inisde of employee sort')
      const sortResults = employees.sort((a, b) => {
        if (a.name.last > b.name.last) {
          return 1
        } else {
          return -1
        }
      })
      setFilteredEmployees(sortResults)
      console.log(sortResults)
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
          employeeSort={employeeSort}
        />
      </div>
    </div>
  );
}

export default App;
