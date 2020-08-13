//dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//components
import DataBody from './DataBody'

const DataTable = () => {
    //code
    const [employees, setEmployees] =useState([])

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=50&nat=us")
        .then(res => setEmployees(res.data.results))
        .catch(err => console.log(err))
    }, [])

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        DOB
                    </th>
                </tr>
            </thead>
            {employees.map((employee, index) => {
                return (

                    <DataBody
                    key={index}
                    employee={employee}
                    />
                )
            })}
        </table>
    )
}

export default DataTable