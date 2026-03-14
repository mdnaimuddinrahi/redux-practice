import { colorSelected, toggled, deleted, allCompleted, clearCompleted } from "../redux/todolist/todos/actions";

export const colorSelectedTodo = (id, todoColor) => {
    console.log('id, color', id, todoColor)
        return async (dispatch) => {
            const response = await fetch(`http://jobtrack.test/api/todos/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    color: todoColor
                }),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
        const todo = await response.json();
        console.log(todo);

        dispatch(colorSelected(todo.data.id, todo.data.color));
    }
}

export const toggledTodo = (id, iscompleted) => {
        return async (dispatch) => {
            const response = await fetch(`http://jobtrack.test/api/todos/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    completed: !iscompleted ? 1 : 0
                }),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
        const todo = await response.json();

        dispatch(toggled(todo.data.id));
    }
}


export const deleteTodo = (id) => {
    return async (dispatch) => {
        await fetch(`http://jobtrack.test/api/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })

        dispatch(deleted(id));
    }
}

export const allCompletedTodo = () => {
    return async (dispatch) => {
        await fetch('http://jobtrack.test/api/todos/complete-all', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })

        dispatch(allCompleted());
    }
}

export const clearCompletedTodo = () => {
    return async (dispatch) => {
        await fetch('http://jobtrack.test/api/todos/clear-completed', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
    
        dispatch(clearCompleted());
    }
}
