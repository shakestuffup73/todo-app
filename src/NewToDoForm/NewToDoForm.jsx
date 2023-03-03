import { useState } from "react"
import {v4 as uuidv4 } from 'uuid'
import './NewToDoForm.css'

const NewtoDoForm = (props) => {

  const { createToDo } = props

  const [task, setTask] = useState({task: '', id: ''})

  function handleChange(evt) {
    setTask({...task, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt){
    evt.preventDefault()
    const newtoDo = {...task, id: uuidv4()}
    createToDo(newtoDo)
    setTask({task: '', id: ''})
  }

  return ( 
    <>
      <form className='NewTodoForm' action="" onSubmit={handleSubmit}>
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

export default NewtoDoForm;


