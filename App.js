import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import ToDoList from './src/ToDoList'

export default function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <ToDoList></ToDoList>
    </Provider>
  )
}
