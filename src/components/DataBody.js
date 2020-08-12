//dependencies
import React from 'react'

const DataBody = (props) => {
    //code
    return (
        <tbody>
            <tr>
                <td><img className="img-fluid" alt={props.name} src={props.src}></img> </td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </tbody>
    )
}

export default DataBody