import React, {useState} from "react";

const ToDo = (props) => {

  const { task, removeToDo, updateToDo, id } = props

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

  let result

  if (isEditing){
    result = (
      <div>
        <form onSubmit={handleUpdate}>
          <label htmlFor="" name='editTask'>Edit To Do</label>
          <input 
            type="text" id="" 
            value={editTask} 
            name='editTask' 
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    )
  } else {
    result = (
      <div>
        <li>{props.task}</li>
        <button onClick={toggleForm}>Edit</button>
        <button onClick={handleRemove}>X</button>
      </div>
    )
  }

  return ( 
    <div>
      {result}
    </div>
  );
}

export default ToDo;