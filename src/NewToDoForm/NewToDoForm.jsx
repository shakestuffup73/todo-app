import { useState } from "react"
import {v4 as uuidv4 } from 'uuid'

const NewToDoForm = (props) => {

  const { createToDo } = props

  const [task, setTask] = useState({task: '', id: ''})

  function handleChange(evt) {
    setTask({...task, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt){
    evt.preventDefault()
    const newToDo = {...task, id: uuidv4()}
    createToDo(newToDo)
    setTask({task: '', id: ''})
  }

  return ( 
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="task"> New To Do </label>
        <input 
          type="text"
          placeholder='New To Do'
          id='task'
          name='task'
          onChange={handleChange}
          value={task.task}
        />
        <button>Add To Do</button>
      </form>
    </>
  );
}

export default NewToDoForm;


