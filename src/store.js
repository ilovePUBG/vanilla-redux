import { createStore } from 'redux'

const ADD_TO_DO = 'ADD_TO_DO'
const DELETE_TO_DO = 'DELETE_TO_DO'

export const addTodo = (text) => ({
  type: ADD_TO_DO,
  text,
})
export const deleteTodo = (id) => ({
  type: DELETE_TO_DO,
  id,
})

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE_TO_DO:
      return state.filter((el) => el.id !== +action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
