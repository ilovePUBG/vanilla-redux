import { createStore } from 'redux'
import { createAction } from '@reduxjs/toolkit'

// const addTodo = (text) => ({
//   type: 'ADD_TO_DO',
//   text,
// })
// const deleteTodo = (id) => ({
//   type: 'DELETE_TO_DO',
//   id,
// })

// redux toolkit에서 action을 정의할 때는 createActon 메서드를 사용한다.
// dispatch를 발생할 때 parameter로 전달한 데이터는 payload라는 속성으로 전달된다.
const addTodo = createAction('ADD_TO_DO')
const deleteTodo = createAction('DELETE_TO_DO')

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case addTodo.type:
      return [{ text: payload, id: Date.now() }, ...state]
    case deleteTodo.type:
      return state.filter((el) => el.id !== +payload)
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
