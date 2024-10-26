import React, { useState } from 'react'
import "./AddTask.css"

const AddTask = () => {

   const[title,setTitle]=useState("")
   const[desc,setDesc]=useState("")

   const addTask = (e)=>{
      e.preventDefault()
      console.log(({title,desc}));
      
   }


    return (
        <>
            
                <form className='task' action="">
                    <div className='task-title'>
                        <label htmlFor="">Task title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Task Title' />
                    </div>
                    <div className='task-desc'>
                        <label htmlFor="">Task Description</label>
                        <input type="text"  value={desc}  onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Task Description' />
                    </div>
                    <button onClick={(e)=>addTask(e)} type='submit'>Add task</button>

                </form>
          

        </>
    )
}

export default AddTask
