import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import fetchTodos from "../../thunk/fetchTodos";

const List = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos)
    }, [dispatch]);

    const filterByStatus = (todo) => {
        switch (filters.status) {
            case "Complete":
                return todo.completed;
            case "Incomplete":
                return !todo.completed;
            default:
                return true;
        }
    }
    const filterByColor = (todo) => {
        const { colors } = filters;
        
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    }
    const filteredTodos = todos.filter(filterByStatus).filter(filterByColor);


    return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {filteredTodos.map((todo) => (
                <Todo key={todo.id} text={todo.text} todo={todo} />
            ))  
        }
    </div>
)}

export default List;