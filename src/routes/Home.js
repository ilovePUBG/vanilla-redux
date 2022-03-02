import { useState } from 'react'

function Home() {
  const [text, setText] = useState('')
  function onChange(ev) {
    setText(() => ev.target.value)
  }
  function onSubmit(ev) {
    ev.preventDefault()
    setText(() => '')
  }
  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )
}

export default Home
