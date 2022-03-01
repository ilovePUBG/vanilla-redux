import { createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TO_DO = 'ADD_TO_DO'
const DELETE_TO_DO = 'DELETE_TO_DO'

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

const paintTodos = () => {
  const toDos = store.getState()
  ul.innerHTML = ''
  toDos.forEach((todo) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    li.id = todo.id
    li.innerText = todo.text
    btn.innerText = 'delete'
    btn.addEventListener('click', deleteTodo)
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintTodos)

const addToDo = (text) => {
  store.dispatch({ type: ADD_TO_DO, text })
}

const deleteTodo = (ev) => {
  store.dispatch({ type: DELETE_TO_DO, id: ev.target.parentNode.id })
}

const onSubmit = (ev) => {
  ev.preventDefault()
  const toDo = input.value
  input.value = ''
  // dispatch를 할 때 전달할 payload도 action 객체에 포함시킬 수 있다~
  addToDo(toDo)
}
form.addEventListener('submit', onSubmit)
