import { combineReducers } from 'redux';
// import counterReducer from './redux/counter/counterReducer';
// import flightReducer from './redux/flightbook/flightReducer';
// import todosReducer from './redux/todolist/todos/reducer';
// import filtersReducer from './redux/todolist/filters/reducer';
import groceryReducer from './redux/grocery/groceryReducer';

const rootReducer = combineReducers({
  // your reducers here
    // counter: counterReducer,
    // flight: flightReducer
    // todos: todosReducer,
    // filters: filtersReducer,
    grocery: groceryReducer
});
export default rootReducer;