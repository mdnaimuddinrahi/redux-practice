// import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
// import TodoLists from './components/TodoLists/TodoLists';
import Grocery from './components/Grocery/Grocery';

function App() {

  return (
    <Provider store={store}>
      <Grocery />
    </Provider>
  )
}

export default App
