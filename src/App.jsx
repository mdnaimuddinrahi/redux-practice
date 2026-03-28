// import './App.css'
import { Provider } from 'react-redux';
import LayoutRouter from './components/Router/LayoutRouter';
import {store} from './app/store';
// import Home from './pages/Home';



function App() {

  return (
    <Provider store={store}>
        <LayoutRouter/>
        
    </Provider>
  )
}

export default App
