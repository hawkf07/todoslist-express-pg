import React, { useState } from 'react'
function TodosList(props) {

  async function removeTodos (id) {
    const response = await fetch(`${props.HOST}:4300/todos/deleteTodos?id=${id}`,{method:"DELETE"})
    const data = await response.json() 
    props.getTodos()
  }

  return (
    <ul className="uk-list uk-box-shadow-medium uk-box-shadow-hover-large container uk-padding uk-list-divider"  >
      <li > ID : {props.id} </li>
      <li> NAME : {props.name} </li>
      <li> DESCRIPTION : {props.description}</li>
      <button className="uk-button uk-button-small uk-button-danger" onClick={(id) => {removeTodos(props.id)}} >DELETE TODOS</button>
    </ul>
  )
}

export default TodosList
