// import './App.css'
import Layout from './components/Layout';
import Balance from './components/Balance';
import Form from './components/Form';
import Transactions from './components/Transactions/Transactions';
import { Provider } from 'react-redux';
import {store} from '../src/app/store'


function App() {

  return (
    <Provider store={store}>
      <Layout>
          <Balance/>
          <Form/>
          <Transactions/>
      </Layout>
    </Provider>
  )
}

export default App
