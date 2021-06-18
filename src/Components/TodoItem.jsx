import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
    const {data, handleDelete, handleStatusChange} = props;
    return (
        <li className="todoitem">
            <input
                className="input"
                type="checkbox"
                checked={data.done}
                onChange={() => handleStatusChange(data.description, data.id)}
            />
            {data.description} - {data.done ? "Done!" : "Go to working on it!"}
            <button className="buttonitem" onClick={() => handleDelete(data.id, data.description)}>X</button>
        </li>
    );
};

export default TodoItem;
