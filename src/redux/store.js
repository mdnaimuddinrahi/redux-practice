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

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducers';
import {logger} from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true
});

export default store;