// const configureStore = require('@reduxjs/toolkit').configureStore;
// const counterReducer = require('../redux/counter/CounterSlice')
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counter/CounterSlice.js'
import dynamicCounterReducer from '../redux/dynamicCounter/DynamicCounterSlice.js'

// configure store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
    }
})
export default store;

// import { configureStore} from '@reduxjs/toolkit';
// import rootReducer from '../rootReducers';
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const logger = createLogger();
// // const myLogger = (store) => (next) => (action) => {
// //   console.log('Action Dispatched:', action);
// //   const result = next(action);
// //   console.log('New State:', store.getState());
// //   return result;
// // }
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => composeWithDevTools(getDefaultMiddleware().concat(logger))
// });

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../rootReducers';
// import {logger} from 'redux-logger';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: true
// });

// export default store;

