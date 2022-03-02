import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

function Detail({ findTodo }) {
  const { id } = useParams()
  return (
    <>
      <h1>{findTodo(id)?.text}</h1>
      <h2>{`created at ${findTodo(id)?.id ?? 'noWhere'}`}</h2>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { findTodo: (id) => state.find((s) => s.id === +id) }
}

export default connect(mapStateToProps, null)(Detail)
