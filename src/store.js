import { createStore } from 'redux'
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

/*
const addTodo = (text) => ({
  type: 'ADD_TO_DO',
  text,
})
const deleteTodo = (id) => ({
  type: 'DELETE_TO_DO',
  id,
})
*/
// redux toolkit에서 action을 정의할 때는 createActon 메서드를 사용한다.
// dispatch를 발생할 때 parameter로 전달한 데이터는 payload라는 속성으로 전달된다.
const addTodo = createAction('ADD_TO_DO')
const deleteTodo = createAction('DELETE_TO_DO')

/*
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
*/
// redux toolkit에서 reducer 함수를 정의할 때는 createReducer 메서드를 사용한다.
// 여기서 유의할 점은, createdReducer 내부에서는 state를 mutate할 수 있다. 드.디.어.!!!
// state를 업데이트할 때는 새로운 데이터를 return하거나 기존 state를 mutate하면 된다~ 2가지 방식이 있다니...
const initialState = []

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, { payload }) => {
      state.push({ text: payload, id: Date.now() })
    })
    .addCase(deleteTodo, (state, { payload }) =>
      state.filter((el) => el.id !== +payload)
    )
})

// const store = createStore(reducer)
// configureStore로 store를 정의하면 브라우저 상에서 Redux dev tool로 state를 시각적으로 확인할 수 있다.
// 물론 보통 redux로 만들어도 dev tool은 사용할 수 있다ㅎ
const store = configureStore({ reducer })

export const actionCreators = {
  addTodo,
  deleteTodo,
}

export default store
