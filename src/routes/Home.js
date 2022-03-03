import { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { add } from '../store/store_slice'
import Todo from '../components/Todo'

function Home({ todos, dispatchAddTodo, dispatchAddSlice }) {
  const [text, setText] = useState('')
  function onChange(ev) {
    setText(() => ev.target.value)
  }
  function onSubmit(ev) {
    ev.preventDefault()
    // dispatchAddTodo(text)
    dispatchAddSlice(text)
    setText(() => '')
  }
  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t) => (
          <Todo {...t} key={t.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { todos: state }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatchAddTodo: (text) => dispatch(actionCreators.addTodo(text)),
    dispatchAddSlice: (text) => dispatch(add(text)),
  }
}

// react-redux의 connect 메서드를 사용하면 컴포넌트와 Provider로 제공한 store와 연결할 수 있다.

// connect 함수의 첫번째 인자는 mapStateToProps로 현재 state(store.getState() 반환값)와 연결대상 컴포넌트로 전달되는 기존 props를 인자로 가진다.
// 이 함수에서 반환하는 plain-object는 기존 연결대상 컴포넌트의 props로 추가된다.
// => 그럼 컴포넌트 정의부에서 추가된 props를 통해 store의 state를 사용할 수 있게된다.

// connect 함수의 두번째 인자는 mapDispatchToProps로 store.dispatch 메서드와 연결대상 컴포넌트로 전달되는 기존 props를 인자로 받는다.
// 마찬가지로 반환되는 객체 안에 dispatch를 활용한 custom dispatch를 포함하면 컴포넌트에서 props를 통해 해당 함수를 사용할 수 있게된다.

// mapStateToProps와 mapDispatchToProps 메서드를 사용하면 state, dispatch와
// 컴포넌트로 전달된 기존의 ownProps로 새로운 props를 만들 수 있음을 의미한다... So beautiful!
export default connect(mapStateToProps, mapDispatchToProps)(Home)
