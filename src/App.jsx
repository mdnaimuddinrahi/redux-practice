// import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import Grocery from './components/GroceryApp/Grocery';

function App() {

  return (
    <Provider store={store}>
      <Grocery />
    </Provider>
  )
}

export default App
