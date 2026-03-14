import { ADDED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED, ALLCOMPLETED, LOADED } from "./actionTypes"


export const added = (todo) => {
    return {
        type: ADDED,
        payload: todo
    }
}

export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: id
    }
}

export const colorSelected = (id, color) => {
    return {
        type: COLORSELECTED,
        payload: {id, color}
    }
}

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos
    }
}