import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import NewToDoForm from "../NewToDoForm/NewToDoForm";

const ToDoList = () => {

  const [todos, setTodos] = useState([])

  const allTodos = todos.map(todo => {
    return <ToDo task={todo.task} key={todo.id} />
  })

  function createToDo(newToDo){
    setTodos([...todos, newToDo])
  }

  return ( 
    <>
      <div>
        <h1>To Do List</h1>
        <NewToDoForm createToDo={createToDo}/>
        <ul>
          {allTodos}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;