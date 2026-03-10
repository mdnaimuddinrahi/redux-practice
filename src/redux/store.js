import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducers';
import {logger} from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true
});

export default store;