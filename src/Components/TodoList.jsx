import React, { useState, useEffect } from "react";
import './TodoList.css';
import Todo from "./Todo";
import TodoForm from './TodoForm';

const todoList = [
    {
        id: 1,
        description: "Apprendre Le HTML",
        done: true,
    },
    {
        id: 2,
        description: "Apprendre Le CSS",
        done: true,
    },
    {
        id: 3,
        description: "Apprendre Le JavaScript",
        done: true,
    },
    {
        id: 4,
        description: "Apprendre Le PHP",
        done: true,
    },
    {
        id: 5,
        description: "Apprendre Symfony",
        done: false,
    },
    {
        id: 6,
        description: "Apprendre React",
        done: false,
    },
];

const TodoList = () => {
    const [todoDescription, setTodoDescription] = useState();
    const [todoId, setTodoId] = useState();
    const [todos, setTodos] = useState(todoList);

    const key = "react.todos";

    const handleStatusChange = (description, id) => {
        setTodoDescription(description);
        setTodoId(id);
        const todoToModify = todos.find(todo => todo.id === id);
        todoToModify.done = !todoToModify.done;
        const todoModified = todos.map(todo => (todo.id !== id ? todo : todoToModify));
        setTodos(todoModified);
    };

    useEffect(() => {
        const todosRetrievedFromStorage = localStorage.getItem(key);

        if (todosRetrievedFromStorage) {
            setTodos(JSON.parse(todosRetrievedFromStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todos));
    }, [todos]);

    const handleTodoInput = (todoinput) => {
        const newTodo = {
            id: Date.now(),
            description: todoinput,
            done: false,
        };
        const allTodos = [newTodo, ...todos];
        setTodos(allTodos);
    };

    function handleDelete(id, description) {
        const result = window.confirm(
            `Voulez-vous vraiment supprimer la todo : ${description} ?`
        );

        if (result) {
            const allTodos = todos.filter((todo) => todo.id !== id);
            setTodos(allTodos);
        }
    }
    
    return (
        <section className="app">
            <h3>Ma Dev MapRoad TodoList en React</h3>
            <TodoForm handleTodoInput={handleTodoInput} />
            <h4>
                Je viens de valider : {todoDescription} / n° todo id : {todoId}
            </h4>
            <Todo
                todos={todos}
                handleStatusChange={handleStatusChange}
                handleDelete={handleDelete}
            />
        </section>
    );
};

export default TodoList;
