import { createContext, useEffect, useState } from "react";
import {fakeFetch} from '../api/fakeFetch'

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([])
    const [doneTodo, setDoneTodo] = useState([])

    const getTodoData = async () => {
        try {
            const response = await fakeFetch('https://example.com/api/todos')
            console.log(response)
            if (response.status === 200) {
                setTodoList(response.data.todos);
                setDoneTodo(response.data.todos.filter(todo => todo.isCompleted))
            }
        } catch (response) {
            console.log(response.message)
        }
    }

    console.log(todoList)

    
    const openTodo = todoList.filter((todo) => !todo.isCompleted);

    const handleDone = ({id, title, description, isCompleted}) => {
        const findItem = todoList.find(todo => todo.id === id);
        findItem.isCompleted = !findItem.isCompleted
        const isTodoPresent = doneTodo.findIndex((item) => item.id === id);
        setDoneTodo([...doneTodo, findItem]);
        
    };

    useEffect(() => {
        getTodoData()
    }, [])


    return (
        <TodoContext.Provider value={{todoList, doneTodo, openTodo, handleDone}}>
            {children}
        </TodoContext.Provider>
    )
}