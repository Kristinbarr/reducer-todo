import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.list.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleItem={props.toggleItem}
        />
      ))}
      <button className='clear-btn' onClick={() => props.clearCompleted()}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList
