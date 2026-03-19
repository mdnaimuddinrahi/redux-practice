// import './App.css'
import { Provider } from 'react-redux';
import LearnVideo from './layout/LearnVideo';
import { store } from './app/store';


function App() {

  return (
    <Provider store={store}>
      <LearnVideo/>
    </Provider>
  )
}

export default App
