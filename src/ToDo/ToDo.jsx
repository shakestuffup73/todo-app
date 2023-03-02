import React from "react";

const ToDo = (props) => {

  const { task } = props

  return ( 
    <>
      <div>
        <li>{task}</li>
        <button>Edit</button>
        <button>X</button>
      </div>
    </>
  );
}

export default ToDo;