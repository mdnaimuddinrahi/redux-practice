// import './App.css'
import { Provider } from 'react-redux';
import store from '../src/app/store'
import TodoLists from './components/TodoLists/TodoLists';


function App() {

  return (
    <Provider store={store}>
      <TodoLists/>
    </Provider>
  )
}

export default App
