import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Todo({ text, dispatchDeleteTodo }) {
  return (
    <li>
      {text} <button onClick={dispatchDeleteTodo}>Delete</button>
    </li>
  )
}

// 두번째 ownProps에는 Home 컴포넌트 내부에서 전달받은 즉, 기존의 props인 text, id가 위치한다.
function mapDispatchToProps(dispatch, { id }) {
  return {
    dispatchDeleteTodo: () => dispatch(actionCreators.deleteTodo(id)),
  }
}

export default connect(null, mapDispatchToProps)(Todo)
