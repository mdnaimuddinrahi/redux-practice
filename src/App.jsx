// import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import Bloggie from './layout/Bloggie';
// import Home from './pages/Home';



function App() {

  return (
    
    <Provider store={store}>
      <Bloggie/>
    </Provider>
  )
}

export default App
