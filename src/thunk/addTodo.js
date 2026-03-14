import { added } from "../redux/todolist/todos/actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch('http://jobtrack.test/api/todos', {
            method: "POST",
            body: JSON.stringify({
                text: todoText
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
    const todo = await response.json();

    dispatch(added(todo));
}
}

export default addTodo;