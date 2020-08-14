//dependencies
import React, { useEffect, useState } from 'react'
//components
import DataBody from './DataBody'

const DataTable = ( {employees} ) => {
    //code
    

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