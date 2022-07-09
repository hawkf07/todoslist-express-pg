import logo from './logo.svg';
import Form from './component/Form/Form'
import TodosList from './component/TodosList.js/index'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import './App.css';
import React, { useEffect, useState } from 'react'



function App() {
  const HOST = 'http://192.168.43.1'

  const [checkIsOnline, setCheckIsOnline] = React.useState(true)
  const [userInput, setUserInput] = React.useState({
    name: "",
    description: ""
  })
  const [todos, setTodos] = React.useState([])
  async function getTodos() {
    let response = await fetch(`${HOST}:4300/todos/getTodos`).then(item => {
      setCheckIsOnline(false)
      return item
    })
    const data = await response.json()
    setTodos(data)
    console.log(data)
  }
  function renderLoading() {
    let render = checkIsOnline == true ? (<span uk-spinner="ratio: 3"> </span>) : ""
    return (
      <>
        {render}
      </>
    )
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className="uk-container">
      <h2 className="uk-padding"> There {todos.length <= 1 ? "is" : "are"} {todos.length} todos</h2>
      <ul className="todos-list">
        {renderLoading()}
        {todos.length > 0 ? todos.map(item => {
          return (
          <TodosList HOST={HOST}  getTodos={getTodos} key={item.id} name={item.name} description={item.description} id={item.id}/>
          )
        }) : (<h2 className="uk-padding"> Add some Todos</h2>)}
      </ul>
      <Form getTodos={getTodos} HOST={HOST} userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
