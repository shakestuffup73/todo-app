import React, {useState} from "react";
import { TransitionGroup } from "react-transition-group";
import './ToDo.css'

const ToDo = (props) => {

  const { task, removeToDo, updateToDo, id, toggleCompletion, completed } = props

  const [isEditing, setIsEditing] = useState(false)
  
  const [editTask, setEditTask] = useState(task)

  function handleRemove(){
    removeToDo(id)
  }
  
  function toggleForm(){
    setIsEditing(!isEditing)
  }

  function handleUpdate(evt){
    evt.preventDefault()
    // take new task data and pass up to parent
    updateToDo(id, editTask)
    setIsEditing(false)
  }

  function handleChange(evt){
    setEditTask(evt.target.value)
    console.log('this is evt.target.value', evt.target.value)
    console.log('this is editTask', editTask)
  }

  function handleToggle(){
    toggleCompletion(id)
  }

  let result

  if (isEditing){
    result = (
      <form className='Todo-edit-form' onSubmit={handleUpdate}>
        <label htmlFor="" name='editTask'>Edit To Do</label>
        <input 
          type="text" 
          id="" 
          value={editTask} 
          name='editTask' 
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    )
  } else {
    result = (
      <div onClick={handleToggle}>
        <li>{task}</li>
      </div>
    )
  }

  return ( 
      <TransitionGroup
          className={completed ? "Todo completed" : "Todo"}
        >
          {result}
          <div className='Todo-buttons'>
            <button onClick={toggleForm}>
              <i class='fas fa-pen' />
            </button>
            <button onClick={handleRemove}>
              <i class='fas fa-trash' />
            </button>
          </div>
        </TransitionGroup>
    );
}


export default ToDo;