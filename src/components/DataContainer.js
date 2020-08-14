//dependencies
import React from 'react'

//components
import DataTable from './DataTable'


const DataContainer = ({employees}) => {
        return(
            <>
            <DataTable
            //propping down employees that was set in App.js
            employees={employees}
            />

            </>
        )
    }

export default DataContainer