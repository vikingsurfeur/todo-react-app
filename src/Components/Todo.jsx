import React from "react";
import TodoItem from "./TodoItem";
import './Todo.css';

const Todo = (props) => {
    const {handleStatusChange, handleDelete} = props;
    return (
        <ul className="todo">
            {props.todos.map(todo => (
                <TodoItem 
                    data={todo} 
                    key={todo.id} 
                    handleStatusChange={handleStatusChange}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default Todo;
