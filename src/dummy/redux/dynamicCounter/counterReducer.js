import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
    counter: 190
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
}

export default counterReducer;