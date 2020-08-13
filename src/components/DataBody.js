//dependencies
import React from 'react'

const DataBody = ( {employee} ) => {
    //code
    return (
        <tbody>
            <tr>
                <td><img className="img-fluid" alt={`${employee.name.first} ${employee.name.last}`} src={employee.picture.thumbnail} /> </td>
                <td>{`${employee.name.first} ${employee.name.last}`}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>
            </tr>
        </tbody>
    )
}

export default DataBody