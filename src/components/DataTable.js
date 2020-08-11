//dependencies
import React from 'react'
import DataBody from './DataBody'

const DataTable = () => {
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
            <DataBody />
        </table>
    )
}

export default DataTable