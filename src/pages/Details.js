import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoDetails = () => {
    const {id} = useParams()
    const {todoList} = useContext(TodoContext)

    const todo = todoList.find((todos) => todos.id === Number(id));
    const {title, description, isCompleted} = todo
    return (
        <>
            <h1>Todo Description</h1>
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>Status: {isCompleted ? 'Done' : 'Not Done'}</p>
        </>
    )
}