import React, { useState } from 'react'

const TodoForm = (props) => {
  console.log('props', props)
  const [item, setItem] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addItem(item)
    setItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>NEW TODO:</label>
      <input type='text' value={item} name='item' onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}

export default TodoForm
