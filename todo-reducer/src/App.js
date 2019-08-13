import React from 'react'
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: todoData
    }
  }

  toggleItem = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else return item
      })
    })
  }

  addItem = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  clearCompleted = () => {
    // console.log('before', this.state.list)
    this.setState({
      list: this.state.list.filter((item) => item.completed === false)
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo List!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default App
