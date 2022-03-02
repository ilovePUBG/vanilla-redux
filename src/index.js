import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

// React 앱과 store를 연결할 때는 Provider에 store props를 전달하면 된다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
