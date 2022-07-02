import React, { useState } from 'react'
function TodosList(props) {

  async function removeTodos (id) {
    const response = await fetch(`http://localhost:4300/todos/deleteTodos?id=${id}`,{method:"DELETE"})
    const data = await response.json() 
    props.getTodos()
  }

  return (
    <ul className="uk-list"  >
      <li > ID : {props.id} </li>
      <li> NAME : {props.name} </li>
      <li> DESCRIPTION : {props.description}</li>
      <button className="uk-button uk-button-danger" onClick={(id) => {removeTodos(props.id)}} >X</button>
      <span uk-icon="facebook"></span>
    </ul>
  )
}

export default TodosList