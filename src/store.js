import { createStore } from 'redux'

const addTodo = (text) => ({
  type: 'ADD_TO_DO',
  text,
})
const deleteTodo = (id) => ({
  type: 'DELETE_TO_DO',
  id,
})

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return [{ text: action.text, id: Date.now() }, ...state]
    case 'DELETE_TO_DO':
      return state.filter((el) => el.id !== +action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addTodo,
  deleteTodo,
}

export default store
