import React from 'react'

const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.list.map((item) => (
        <div
          key={item.id}
          className={`item${item.completed ? ' completed' : ''}`}
          onClick={() => props.toggleItem(item.id)}
        >
          <p>{item.task}</p>
        </div>
      ))}
      <button className='clear-btn' onClick={() => props.clearCompleted()}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList
