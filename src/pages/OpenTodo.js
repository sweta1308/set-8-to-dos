import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";


export const OpenTodo = () => {
    const {openTodo} = useContext(TodoContext);

    return (
        <>
            <Link to='/'>Return to Summary</Link>
            <h1>Open Todos</h1>
            <h3>Open Todos: {openTodo.length}</h3>
            {openTodo.map(({id, title, description, isCompleted}) =>  (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Status: Not Done</p>
                    <Link to={`/details/${id}`}>Expand Todo</Link>
                    <hr />
                </div>
            ) )}
        </>
    )
}