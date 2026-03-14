import { loaded } from "../redux/todolist/todos/actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch('http://jobtrack.test/api/todos')
    const todos = await response.json();

    dispatch(loaded(todos));
}

export default fetchTodos;