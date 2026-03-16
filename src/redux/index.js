// const store = require('../app/store');
// const {counterActions} = require('../redux/counter/CounterSlice');
import store from '../app/store.js'
// import {counterActions} from '../redux/counter/CounterSlice.js'
import {dynamicCounterActions} from '../redux/dynamicCounter/DynamicCounterSlice.js'

//initial state
console.log(`initial state ${JSON.stringify(store.getState())}`)

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch actions

// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.increment(3));
store.dispatch(dynamicCounterActions.decrement(7));

