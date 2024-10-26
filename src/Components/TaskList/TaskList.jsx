import React from 'react'
import "./TaskList.css"

const TaskList = () => {
  return (
   <table>
    <thead>
        <tr>
        <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdoc</td>
        </tr>
    </tbody>
   </table>
  )
}

export default TaskList
