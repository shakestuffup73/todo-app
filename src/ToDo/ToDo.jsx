import React from "react";

const ToDo = (props) => {

  const { task, removeToDo, id } = props

  function handleRemove(){
    removeToDo(id)
  }

  return ( 
    <>
      <div>
        <li>{task}</li>
        <button>Edit</button>
        <button onClick={handleRemove}>X</button>
      </div>
    </>
  );
}

export default ToDo;