import React, { useState, useReducer } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

import { listReducer, initialState } from './reducers/listReducer'

const App = () => {
  const [state, dispatch] = useReducer(listReducer, initialState)
  const toggleItem = (id) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: id })
  }

  const addItem = (task) => {
    dispatch({ type: 'SUBMIT_ITEM', payload: task })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className='app'>
      <h2>Welcome to your Todo List!</h2>
      <TodoForm addItem={addItem} />
      <TodoList
        list={state.list}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App
