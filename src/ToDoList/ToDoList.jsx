import React, { useState } from "react";
import ToDo from "../ToDo/ToDo.jsx";
import NewToDoForm from "../NewToDoForm/NewToDoForm";

const ToDoList = () => {

  const [toDos, setToDos] = useState([])

  const allToDos = toDos.map(toDo => {
    return (
      <ToDo 
        task={toDo.task} 
        key={toDo.id} 
        id={toDo.id} 
        removeToDo={removeToDo} 
        updateToDo={updateToDo}
        completed={toDo.completed} 
        toggleCompletion={toggleCompletion} 
        className='To do'
      />
    )
  })

  function createToDo(newToDo){
    setToDos([...toDos, newToDo])
  }

  function removeToDo(id){
    setToDos(toDos.filter(toDo => toDo.id !== id))
  }

  function updateToDo(id, updatedTask){
    const updatedToDos = toDos.map(toDo => {
      if(toDo.id === id){
        return {...toDo, task: updatedTask}
      }
      else {
        return toDo
      }
    })
    setToDos(updatedToDos)
  }

  function toggleCompletion(id){
    const updatedToDos = toDos.map(toDo => {
      if(toDo.id === id){
        return {...toDo, completed: !toDo.completed}
      }
      return toDo
    })
    setToDos(updatedToDos)
  }

  return ( 
    <>
      <div>
        <h1>To Do List</h1>
        <NewToDoForm createToDo={createToDo}/>
        <ul>
          {allToDos}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;