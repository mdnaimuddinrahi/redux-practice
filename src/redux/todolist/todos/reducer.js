import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from './actionTypes';

import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: action.payload.completed,
                    color: action.payload.color
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            )
        case COLORSELECTED:
            const { id, color } = action.payload
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }   
                return {
                    ...todo,
                    color
                }
            }
            )
        case DELETED:
            return state.filter(todo => todo.id !== action.payload)
        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            }
            )
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)
        case LOADED:
            return action.payload;
        default:
            return state
    }   
}

export default reducer