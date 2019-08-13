import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash Car',
    id: 1528817084359,
    completed: false
  }
]

const App = () => {
  const [list, setList] = useState(todoData)

  const toggleItem = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else return item
      })
    )
  }

  const addItem = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    setList([...list, newTask])
  }

  const clearCompleted = () => {
    // console.log('before', this.state.list)
    setList(list.filter((item) => item.completed === false))
  }

  return (
    <div className='app'>
      <h2>Welcome to your Todo List!</h2>
      <TodoForm addItem={addItem} />
      <TodoList
        list={list}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App
