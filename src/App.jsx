// import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import ShoppingCart from './components/GroceryApp/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
        <ShoppingCart />
    </Provider>
  )
}

export default App
