import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import { remove } from '../store/store_slice'

function Todo({ text, id, dispatchDeleteTodo, dispatchRemoveSlice }) {
  return (
    <>
      <Link to={`/${id}`}>
        <li>{text}</li>
      </Link>
      {/* <button onClick={dispatchDeleteTodo}>Delete</button> */}
      <button onClick={dispatchRemoveSlice}>Delete</button>
    </>
  )
}

// 두번째 ownProps에는 Home 컴포넌트 내부에서 전달받은 즉, 기존의 props인 text, id가 위치한다.
function mapDispatchToProps(dispatch, { id }) {
  return {
    dispatchDeleteTodo: () => dispatch(actionCreators.deleteTodo(id)),
    dispatchRemoveSlice: () => dispatch(remove(id)),
  }
}

export default connect(null, mapDispatchToProps)(Todo)
