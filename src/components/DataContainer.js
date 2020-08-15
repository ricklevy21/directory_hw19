//dependencies
import React from 'react'

//components
import DataTable from './DataTable'

//this is actually a totally unecessary component, but keeping it in place anyway
const DataContainer = ({employees, employeeSort}) => {
        return(
            <>
            <DataTable
            //propping down employees that was set in App.js
            employees={employees}
            employeeSort={employeeSort}
            />

            </>
        )
    }

export default DataContainer