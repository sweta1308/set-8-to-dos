import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const {todoList, handleDone} = useContext(TodoContext)

    return (
        <>
            <h1>Todos</h1>
            <Link to='/doneTodo'>Done Todos</Link> <br />
            <Link to='/openTodo'>Open Todos</Link>
            {todoList.map(({id, title, description, isCompleted}) => (
                <div key={id} style={{textDecoration: isCompleted ? 'line-through' : ''}}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
                    <button onClick={() => handleDone({id, title, description, isCompleted})} disabled={isCompleted}>Mark As Done</button>
                    <hr />
                </div>
            ))}
        </>
    )
}