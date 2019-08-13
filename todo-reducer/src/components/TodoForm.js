import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      item: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.item)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>NEW TODO:</label>
        <input type='text'
        value={this.item}
        name='item'
        onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm
