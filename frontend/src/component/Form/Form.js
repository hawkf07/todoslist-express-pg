import React from 'react'
import './index.css'

function Form(props) {

  function handleUserInput(e) {
    props.setUserInput(prevValue => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      }
    })
  }


  async function postData() {
    const response = await fetch(`http://localhost:4300/todos/addTodos?name=${props.userInput.name}&description=${props.userInput.description}`, {
      method: "POST"
    })
    const data = await response.json()
    console.log(data)
    props.getTodos()
  }



  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.setUserInput({
        name: '',
        description: ''
      })
      postData()
    }} className='form-uk'>
      <h2> Create Todos </h2>
      <input type="text" name="name" placeholder='please enter the name' className="uk-input uk-margin-small" onChange={handleUserInput} value={props.userInput.name} />
      <input type="text" name="description" onChange={handleUserInput} className="uk-input " placeholder='please enter the description' value={props.userInput.description} />
      <button type="submit" className="uk-button uk-button-primary uk-margin-small"> submit</button>
    </form>
  )
}
export default Form
