import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AddTask/>
      <TaskList/>
    </div>
  )
}

export default App
