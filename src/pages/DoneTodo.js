import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";


export const DoneTodo = () => {
    const {doneTodo} = useContext(TodoContext);



    return (
        <>
            <Link to='/'>Return to Summary</Link>
            <h1>Done Todos</h1>
            <h3>Done Todos: {doneTodo.length}</h3>
            {doneTodo.map(({id, title, description, isCompleted}) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Status: Done</p>
                    <Link to={`/details/${id}`}>Expand Todo</Link>
                    <hr />
                </div>
            ) )}
        </>
    )
}