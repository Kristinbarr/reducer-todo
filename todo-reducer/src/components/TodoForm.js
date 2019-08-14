import React, { useState } from 'react'

const TodoForm = (props) => {
  const [task, setItem] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addItem(task)
    setItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>NEW TODO:</label>
      <input type='text' value={task} name='task' onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}

export default TodoForm
