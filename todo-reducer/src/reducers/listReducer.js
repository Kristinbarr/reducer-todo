import { todoData } from '../data'

export const initialState = {
  list: todoData
}

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      }
      break
    case 'TOGGLE_ITEM':
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          } else return item
        })
      }
      break
    case 'CLEAR_COMPLETED':
      return {
        list: state.list.filter((item) => item.completed === false)
      }
      break
    default:
      break
  }
}
